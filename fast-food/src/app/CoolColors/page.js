"use client";
// import Box from "./Box.js";
import BoxGrid from "./BoxGrid.js";
import "./css/global.css"

function CoolColors(){

    return (
        <main>
            <p>Hello this is the CoolColors page.</p>
            {/* <Box/> */}
            <BoxGrid/>

            <a href="/"><button>home</button></a>
        </main>
    );
}

export default CoolColors;