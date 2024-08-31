import "./TopBar.css";


//toggle is the onClick event handled by the useState Hook to make the sideBarPanel appear and dissapear
function TopBar(){

return (
    
    <section className="TopBar">
            <h2 id="logo">Fast-food!</h2>
            <div id="importantButtons">
                <a href="/">
                <button id="home">Home</button>
                </a>
            </div>
    </section>

);
}

export default TopBar;