"use client";
import TopBar from "./TopBar.js";
import RenderContent from "./RenderContent.js";
import LoginForm from "./LoginForm.js";
import { useState } from "react";
import SignUpForm from "./SignUpForm.js";
import "./global.css";

export default function Login() {

    const loginClicked = () => {
        setContent(<LoginForm signupClicked={signupClicked} />)
    }

    const signupClicked = () => {
        setContent(<SignUpForm loginClicked={loginClicked}/>)
    }
    //the "content" is what is being rendered at a time in the Login page.
    //We can control what is rendered through this "setContent" function. Which we will use to render different components.
    const [content, setContent] = useState(<LoginForm signupClicked={signupClicked} />) //we start by rendering a login form.

    return (
        <div className="Login">
            <TopBar/>
            <RenderContent content={content}/>
        </div>
    );

}