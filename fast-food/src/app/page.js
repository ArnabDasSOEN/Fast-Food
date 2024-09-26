"use client";
import "./css/Global.css";
import TopBar from  "./TopBar.js";
import MainSection from "./MainSection.js";
import { useState } from 'react';
import { useEffect } from "react";
//import {menuItems} from "./Menu.js"
import axios from "axios";
axios.defaults.withCredentials = true;
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  //logic to make side bar panel appear
  //we toggle the className of the sideBarPanel everytime we click on the sideBarButton.
const [displayed, setDisplayed] = useState("hidden");
const toggled = () => {
  if (displayed==="hidden"){
    setDisplayed("SideBarPanel");
  }
  else{
    setDisplayed("hidden")
  }
}

const [menuItems, setMenuItems] = useState([]);
const [user, setUser] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect( () => {
  axios.get("http://localhost:3000")
  .then( res => {
    console.log("succesfully got your menu in the frontend from axios");
    //console.log(data.headers.date, data.data);
    //const date = data.headers.date;
     setUser(res.data.username);
     setMenuItems(res.data.menu);
     //console.log(user); //this prints "null" because in the initial render, user is set to null.
     if (res.data.username !== "Customer"){ //user !== "Customer" && user !== null ){ //means logged in succesfully
      //toast.success(`Succesfully logged in as: ${res.data.username}`); //========================================================================================================
      setIsLoggedIn(!isLoggedIn);
     }
  })
  .catch( err => {
    console.log("error getting your menu with axios")
  }) 
}, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
    {/* <ToastContainer />  */}
    <TopBar toggle={toggled} isLoggedIn={isLoggedIn} />
    <h3>Greetings {user}</h3>
    <MainSection menuItems={menuItems} classname={displayed}/>
    </>
  );
}
