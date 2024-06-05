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



//what you can do is move the button outside of top bar and make it position:absolute. That way it remains on the top right corner
export default function Home() {

  //logic to make side bar panel appear

const [displayed, setDisplayed] = useState("hideSidePanel");

const toggled = () => {
  if (displayed==="hideSidePanel"){
    setDisplayed("");
  }
  else{
    setDisplayed("hideSidePanel")
  }
}

  return (
    <>
    <TopBar toggle={toggled}/>
    <MainSection/>
    </>
  );
  
}
