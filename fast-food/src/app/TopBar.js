import SideBarPanel from "./SideBarPanel";
import "./css/TopBar.css";
function TopBar(){

    // #131212 -> color for the borders of buttons
return (
    <section className="topBar">
        
            <button id="sideBarButton">{"\u2261"}</button>
            {/* <SideBarPanel/> */}
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="login">login</button>
                <button id="history">history</button> 
            </div>
        
        
    </section>

);
}

export default TopBar;