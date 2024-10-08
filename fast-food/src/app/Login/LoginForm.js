import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true; //need to add this in order to always send the cookie to the backend on every API request.


export default function LoginForm({signupClicked}) {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); //the target property of the event object shows you what was clicked
        const formObject = Object.fromEntries(formData.entries());
        const inputElements = document.querySelectorAll('input[type="text"], input[type="password"]');
        axios.post("http://localhost:3000/login", formObject ) //alternatively, you can add {withCredentials:true} as an additional parameter aftet the data you are sending
            .then( data => {                                   //instead of relying on axios.defaults.withCredentials = true;
                window.location.href = "/"; //redirecting the user from the front-end.
            //    console.log(data.data);
            })
            .catch(err => {
                  toast.error('Error logging in invalid credentials');
              })
        inputElements.forEach(input => input.value = '');
        }
    
    //The label "for" attribute does not exist in react becuase "for" is a reserved keyword for forloops in JavaScript. THis is why we use "htmlFor" instead
    //its the same with class and className in react. We use className because "class" is a reserved keyword in javaScript.
    //remember that react transforms all of our code into valid javaScript through a tool called "babbel"
    //everything that we write in react is just a syntax extention (JSX) so that babbel can understand it and then transform it into valid JavaScript.

    //htmlFor attribute is associated with the ID attribute of the input tag.
    return(
        <main>
            <ToastContainer />
            <h1>Login page</h1>
            <form  onSubmit={onSubmit} > 
                <div>
                    <label htmlFor="username"><h2>UserName:</h2></label>
                    <input type="text" name="username" id="username" placeholder="Please enter your username" required></input>
                </div>
                <div>
                    <label htmlFor="password"><h2>Password:</h2></label>
                    <input type="password" name="password" id="password" placeholder="Please enter your password" required></input>
                </div>
                <button>log in</button>
                <div>
                    <p>new here?</p> <a className="clickable" onClick={signupClicked}>sign up here!</a>
                </div>
            </form>
        </main>
    )
}