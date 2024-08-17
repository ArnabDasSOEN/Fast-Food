"use client";
import "./css/Global.css";
import TopBar from  "./TopBar.js";
import MainSection from "./MainSection.js";
import React, { useState } from 'react';
import {menuItems} from "./Menu.js"

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
  return (
    <>
    <TopBar toggle={toggled}/>
    <MainSection menuItems={menuItems} classname={displayed}/>
    </>
  );
}
