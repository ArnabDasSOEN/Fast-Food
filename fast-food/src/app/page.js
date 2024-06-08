"use client";

//main page run with "npm run dev" in terminal
/* 
main css colors:  
    #B9E3C6
    #FFEAEE
    #D81E5B
    #23395B
    #FFFD98
*/
import "./css/Global.css";
// import RandomPokemon from "./RandomPokemon";
import TopBar from  "./TopBar.js";
import MainSection from "./MainSection.js";
import React, { useState } from 'react';



export default function Home() {

  //logic to make side bar panel appear
  //we basically change the className of the sideBarPanel everytime we click on the sideBarButton.
const [displayed, setDisplayed] = useState("SideBarPanel");
const toggled = () => {
  if (displayed==="SideBarPanel"){
    setDisplayed("");
  }
  else{
    setDisplayed("SideBarPanel")
  }
}

  return (
    <>
    <TopBar toggle={toggled}/>
    <MainSection classname={displayed}/>
    </>
  );
  
}
