
import "./css/TopBar.css";

import SideBarButton from "./SideBarButton.js";

//toggle is the onClick event handled by the useState Hook to make the sideBarPanel appear and dissapear
function TopBar({toggle}){
    
return (
    <section className="topBar">
        
            <SideBarButton toggle={toggle} />
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="login">login</button>
                <button id="history">history</button> 
            </div>
        
        
    </section>

);
}

export default TopBar;