import "./css/TopBar.css";
import SideBarButton from "./SideBarButton.js";
import LogoutButton from "./LogoutButton.js";
import LoginButton from "./LoginButton.js";
//toggle is the onClick event handled by the useState Hook to make the sideBarPanel appear and dissapear
function TopBar({toggle, isLoggedIn}){
return (
    <section className="topBar">
            <SideBarButton toggle={toggle} />
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="history">history</button>
                { isLoggedIn ? <LogoutButton/> : <LoginButton/> }
            </div>
    </section>
)}
export default TopBar;