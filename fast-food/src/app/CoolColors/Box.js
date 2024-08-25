import "./css/box.css";
import {useState} from "react"
const colors = ["#DAD2D8","#143642","#0F8B8D","#EC9A29","#D30C7B","#9EE493","#ADE25D","#EAF4D3","#F4AFB4","#80ED99", "#EFF1ED", "#D6FFF6", "#61E8E1", "#2274A5", "#E9F1F7", "#E7DFC6", "#596475" ]

export default function Box(){
    function randomNumber(n){
        return Math.floor(Math.random() * n);
    }

    const changeColor = () => {
        setColor(colors[randomNumber(colors.length)])
    }


    const [color, setColor] = useState(colors[randomNumber(colors.length)]);
    return (
    <div className="box" onClick={changeColor} style={{ backgroundColor: color }}></div>
    )


}
