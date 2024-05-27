import "./css/TopBar.css";
function TopBar(){

    // #131212 -> color for the borders of buttons
return (
    <section className="topBar">
        
            <button id="sideBarButton">side bar</button>
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <button id="login">login</button>
                <button id="history">history</button> 
            </div>
        
        
    </section>

);
}

export default TopBar;