import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpForm({loginClicked}) {

    const onSubmit = (e) => {
        e.preventDefault(); //this may not be necessary, test your app wityh commenting this line.
        //retrieve data from forum
        const formData = new FormData(e.target); //the target property of the event object shows you what was clicked
        // for (let [key, value] of formData.entries()) { //the "entries()" method is quite useful, look up what it does.
        //     console.log(`${key}: ${value}`);
        //   }
        //console.log(formData)
        
        //This is necessary because the "formData" object is not an "Actual JS" object. We can't access it's properties through the dot notation.
        const formObject = Object.fromEntries(formData.entries());

        const inputElements = document.querySelectorAll('input[type="text"], input[type="password"]');
        axios.post("http://localhost:3000/signup", formObject)
            .then(  () => {
                toast.success("Succesfully created your account");
            })
            .catch( err => {
                toast.error('Error signing up: username already exists' + err);
            })
        inputElements.forEach(input => input.value = '');
        }
        //need to specify complete path because if we only define "/signup", the request goes to http://localhost:3001/signup. This is because since our express app is listening to port 3000
        //our react application cannot connect to port 3000 and instead connects to 3001. If we make a request to http://localhost:3001/signup, we're not going to receive
        //anything because our express application is listening on port 3000, not 3001.
        //in our express application, we don't have to define the entire path parameter, only "/signup" is fine because we make express listen to a specific port.

    return(
        <main className="SignUpForm">
            <ToastContainer />
            <h1> Sign up form</h1>
            <form onSubmit={onSubmit} >
                <div>
                    <label htmlFor="username"><h2>UserName:</h2></label>
                    <input type="text" name="username" id="username" placeholder="Please enter your username" required></input>
                </div>
                <div>
                    <label htmlFor="password"><h2>Password:</h2></label>
                    <input type="password" name="password" id="password" placeholder="Please enter your password" required></input>
                </div>
                <button>Sign up</button>
            </form>
            <p className="clickable" onClick={loginClicked}>go back to login</p>
        </main>
    )
}