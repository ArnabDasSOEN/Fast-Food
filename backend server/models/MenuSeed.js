const mongoose = require("mongoose");
const Menu = require("./menu.js");

//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/fast-food")
    .then(console.log("Connected to database from express"))
    .catch( (err) => {
        console.log("Error connecting to database from express", err)
    });

//our connection problem is fixed, but now the array is sent as "empty" even though we are filling it with data.
const menuItems = [
    {name:"pizza",          price:2.99,  src:"https://thumb.ac-illust.com/80/80ab92336666da6aa961462289dc6508_t.jpeg"},
    {name:"drink",          price:0.99,  src:"https://static.vecteezy.com/system/resources/previews/022/025/421/original/soda-drink-in-pixel-art-style-vector.jpg"},
    {name:"chicken burger", price:4.99,  src:"https://static.vecteezy.com/system/resources/thumbnails/021/587/309/small_2x/pixel-art-illustration-burger-pixelated-pop-burger-food-fast-food-burger-pixelated-for-the-pixel-art-game-and-icon-for-website-old-school-retro-vector.jpg"},
    {name:"fries",          price:1.99,  src:"https://static.vecteezy.com/system/resources/previews/021/554/258/original/fried-fries-in-pixel-art-style-vector.jpg"},
    {name:"Ice Cream[1]",   price:1.99,  src:"https://t3.ftcdn.net/jpg/05/59/28/08/360_F_559280859_wRHpyzbPWspMxJb9Ncw6vvnxZobIUVBC.jpg"},
    {name:"Ice Cream[2]",   price:2.99,  src:"https://t4.ftcdn.net/jpg/04/17/46/45/360_F_417464522_uIqXpFdRTtPBw5CF3RxQs13bouIAo86Y.jpg"},
    {name:"smoothie",       price:1.99,  src:"https://i.pinimg.com/564x/45/7f/7f/457f7fe030a15b981109e2805d38da4d.jpg"},
    {name:"milkshake",      price:1.99,  src:"https://i.pinimg.com/736x/63/2e/2d/632e2d6381c152adcaeed27139b64054.jpg"},
    {name:"pasta",          price:3.99,  src:"https://i.pinimg.com/originals/a5/48/88/a54888b2dd1749817f87bb2ec279a048.jpg"},
    {name:"sea food",       price:2.99,  src:"https://static.vecteezy.com/system/resources/previews/000/681/081/original/seafood-thin-line-and-pixel-perfect-icons.jpg"},
    {name:"sushi",          price:1.99,  src:"https://thumb.ac-illust.com/c6/c613dfaa4bcbcc18e980eaf36f55979f_t.jpeg"},
    {name:"cheese burger",  price:2.99,  src:"https://previews.123rf.com/images/kmarfu/kmarfu1807/kmarfu180700026/104604012-pixel-art-hamburger-isolated-on-white-background.jpg"}
  ];
//we have to first delete everything in the current collection and then seed it with what we want.
const deleteAndSeedMenu = async () => {
    await Menu.deleteMany({});
    //remember, you're creating a new "Menu" object from the "Menu" class (which is technically a Schema)
    //So you have to create the object and set the appropriate property to the appropriate variable
    const c = new Menu({items: menuItems});
    await c.save();
}
//defining the function does not execute it. So we have to execute it here.
deleteAndSeedMenu().then(console.log("Succesfully deleted all previous menus and seeded with new data."));

