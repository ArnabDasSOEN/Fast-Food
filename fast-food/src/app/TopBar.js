import SideBarPanel from "./SideBarPanel";
import "./css/TopBar.css";
import React from "react";
import SideBarButton from "./SideBarButton";

function TopBar(){

    // #131212 -> color for the borders of buttons
return (
    <section className="topBar">
        
            
            <SideBarButton/>
            <SideBarPanel/>
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="login">login</button>
                <button id="history">history</button> 
            </div>
        
        
    </section>

);
}

export default TopBar;