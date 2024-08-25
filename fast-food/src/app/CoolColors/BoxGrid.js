import Box from "./Box.js";
import "./css/BoxGrid.css"

function BoxGrid(){
    const grid = []
    for (let i = 0; i<25 ; i++){
        grid.push(<Box/>)
    }
    
    return (
    <div className="BoxGrid">
        {grid}
    </div>
    )
}

export default BoxGrid;