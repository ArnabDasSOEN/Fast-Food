import "./css/SideBarButton.css";

function SideBarButton({toggle}){
    return <button id="sideBarButton" onClick={toggle}>{"\u2261"}</button>;
}
export default SideBarButton;