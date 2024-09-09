const express = require("express");
const app = express();
const Menu = require("./models/menu.js");
const User = require("./models/user.js");
const mongoose = require("mongoose");
const cors = require("cors"); //middleware that is related to security. So that your network packages don't get intercepted by other people.
const AppError = require("./AppError.js"); //if you're requiring a file, you need to specify it through relative paths
const bcrypt = require("bcrypt") //if you require a module inside node_modules, you don't need to define a relative path. 
require('dotenv').config(); //don't need to catch this inside a variable.
const session = require("express-session");

//middleware section
//the reason why we need cors is because our backend and frontend are running on different ports (domains), this is why our session is not working properly. If it was the same domain
//then session works fine. but because we're on different ports/domains, we can't send a cookie across ports back and forth.
//Sessions work through signed cookies that are sent to the server. This signed cookie serves as a key/id that allows access to the session's data onto the server.
//In the /login route, we are successfully setting the session and cookie... but only for port 3000. Our react application is running on port 3001. Hence, we don't have access to the 
//signed cookie on the front-end application, which means we also don't have access to the session data stored on the server.
//If our front-end application and backend application were to run on the same port, then session would work fine. Because when we create a session, we create a signed cookie that we send 
//to the client. But let's say our front-end and backend are running on port 3000. If we create a session, it's only valid for port 3000. If you go to any other port (i.e. 3001) then
//the session is not existent. The session only EXISTS on the port it was created in. If your server is running on port 3000 and its creating a session for the client, that session only exists
//on port 3000.
//and sessions are identified through signed cookies. One signed cookie serves as an id/key to a session on the server. If that cookie is not sent between the frontend and backend, then
//there is no way to access the session. The backend has no idea what session you're talking about because you don't have the appropriate cookie. and the frontend ends up never receiving
//the cookie anyway because it's running on a different port.
//so when you set a session on the server running on port 3000 but your frontend application is running on port 3001, the server sends a cookie that represents the key/id to the session on 
//the server to PORT 3000, but your frontend application ends up never receiving it because it's running on port 3001.

//in other words, The problem is that we're not able to share cookies across ports. We can't send a cookie from one port to the other. Hence, that signed cookie (which is the sessions's 
// identifier) ends up getting lost.

//this is why when were logging in and then going to the main page "/", it looks like we're "losing" the data that we set on the session in "/login"
//(console.log req.session at the end of "/login" and the beginning of "/").
//But we actually didn't lose the data we set.
//That session data still exists but it only exists on port 3000. and since the frontend is running on port 3001,
//it doesn't have access to the session data because it's not receiving the signed cookie that serves as a key to the sessions's data.
//the signed cookie that gets created for the session only exists on port 3000. If your frontend is not on port 3000, it will not receive the signed cookie.

//one way to bypass this is to use localStorage as a mean to store session data. This is safe because no other domain has access to a domain's localstorage.
//you can either store the cookie and it's value in the localStorage and send it on every request. Or you can store the session's data on the frontend localStorage.
//alternatively, you can add this line of code after importing axios:
//import axios from "axios";
//axios.defaults.withCredentials = true;
//since express-session works by 1) creating a session on the server side data store and then 2)creating a signed cookie that servers as a key/id to the session on the session data store
//and sending it to the client. The client needs to receive this cookie and send it on every request. I am using axios to handle API requests, hence i need to configure axios to send cookies
//otherwise, the session gets "lost" because the cookie that serves as the id to the particular session is never sent from the frontend.

//In the login route, we are succesfully creating the session with the appropriate username and isAdmin 
app.use(cors({
    //only the clients with this origin can access our server.
    origin:"http://localhost:3001", //this needs to be the port where the front-end runs. Because the frontend makes request to this API by sending data from its forms.
    credentials: true, //allows frontend to send cookies.
    methods: ['GET', 'POST'], //only allow these methods from the client.
    // allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); //Axios by default sends JS objects in JSON format, so we parse the body with JSON instead of urlencoded
app.use(session({
        name: 'session.sid',//name of the cookie that gets sent to the frontend.
        secret: process.env.COOKIE_SIGN,
         resave:false,
         saveUninitialized:false,
         cookie: {
            maxAge: 60 * 60 * 1000 // 1 hour
          }
})) //now, on all incomming request, we now have a session property available. req.session


app.use((err, req, res, next) => {
    const {status = 500, message = "Error server side" } = err;
    res.status(status).send(message);
})
//MIDDLEWARE END

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/fast-food")
    .then(console.log("Connected to database from express"))
    .catch( (err) => {
        console.log("Error connecting to database from express", err)
    });




//RESTful API
//main page where the client gets the menu.

app.get("/", async (req, res) => {
    const menu = await Menu.findOne({})
    const {username = "Customer"} = req.session;
    const obj = {
        menu: menu.items,
        username
    }
    //in objects, the data is set as key value pairs. If the key is the same as the value, you can do key:value. For example, username:username. But 
    //a syntax shortcut is to just do { username } and that is equivalent to { username:username }
    res.send(obj);
});

//works fine
app.post("/signup", async (req, res, next) => {
    const {username, password} = req.body
    const user = await User.findOne({username});
    //if the username exists, create an error object and give it to the error handler defined
    if (user){
        return next(new AppError(409, "an account with that username already exists. Please try again"));
    }
    const hash = await bcrypt.hash(password, 12); //12 is industry standard
    const theNewUser = new User({username, password:hash, isAdmin:false, orders:[]});
    await theNewUser.save();
    res.status(200).send("signed up succesfully");
});

//works fine.
app.post("/login", async (req, res, next) => {
    const {username, password} = req.body;
    const user = await User.authenticate(username, password);
    if(!user){
        return next(new AppError(409, "invalid credentials")); //we dont want to give hint about wheter the username or password is wrong
    }
    req.session.username = user.username;
    req.session.isAdmin = user.isAdmin;
    res.send("Logged in Succesfully");
});





//From the code below. I was able to troubleshoot why sessions wasn't working. its because frontend and backend are running on different ports.

//test session like this. It works.
// app.get('/testingSession', (req, res, next) => {
//     if (req.session.views) {
//       req.session.views++
//       res.setHeader('Content-Type', 'text/html')
//       res.write('<p>views: ' + req.session.views + '</p>')
//       res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
//       res.end()
//     } else {
//       req.session.views = 1
//       res.end('welcome to the session demo. refresh!')
//     }
//   })

//   app.get('/testingLogin', (req, res, next) => {
//     const {user, pass} = req.query;
//     req.session.user = user;
//     req.session.pass = pass;
//    // res.send("Logged in as " + user + " with password " + pass);
//    res.redirect("/testingAuth")
//   })

//   app.get('/testingAuth', (req, res, next) => {
//     res.send("This is the testingAuth page ==== Logged in as <b>" + req.session.user + "</b> with password " + req.session.pass);
//   })




app.listen(3000, () => {
    console.log("Express listening on port 3000")
})