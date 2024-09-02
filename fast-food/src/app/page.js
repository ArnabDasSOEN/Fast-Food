"use client";
import "./css/Global.css";
import TopBar from  "./TopBar.js";
import MainSection from "./MainSection.js";
import { useState } from 'react';
import { useEffect } from "react";
//import {menuItems} from "./Menu.js"
import axios from "axios";


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

useEffect( () => {
  axios.get("http://localhost:3000")
  .then( data => {
    console.log("succesfully got your menu in the frontend from axios");
    //console.log(data.headers.date, data.data);
    //const date = data.headers.date;
    setMenuItems(data.data);
  })
  .catch( err => {
    console.log("error getting your menu with axios", err)
  })
}, []); // Empty dependency array means this effect runs once after the initial render





  return (
    <>
    <TopBar toggle={toggled}/>
    <MainSection menuItems={menuItems} classname={displayed}/>
    </>
  );
}
