
import "./css/TopBar.css";

import SideBarButton from "./SideBarButton.js";
import SideBarPanel from "./SideBarPanel.js";
function TopBar({toggle, panelShown}){
    
return (
    <section className="topBar">
        
            
            <SideBarButton toggle={toggle} />
            <SideBarPanel className={panelShown}/>
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="login">login</button>
                <button id="history">history</button> 
            </div>
        
        
    </section>

);
}

export default TopBar;