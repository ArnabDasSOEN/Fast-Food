"use client";

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
const [displayed, setDisplayed] = useState("hidden");
const toggled = () => {
  if (displayed==="hidden"){
    setDisplayed("SideBarPanel");
  }
  else{
    setDisplayed("hidden")
  }
}

  return (
    <>
    <TopBar toggle={toggled}/>
    <MainSection classname={displayed}/>
    </>
  );
  
}
