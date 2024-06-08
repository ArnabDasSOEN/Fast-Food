import "./css/SideBarPanel.css"
import TagsInSideBar from "./TagsInSideBar.js";

function SideBarPanel({classname}){


    return (
        <div className={classname}>
           <TagsInSideBar link="./AboutUs-" text="About Us"/>
        </div>
    );
}

export default SideBarPanel;