import FoodCard from "./FoodCard.js";
import SideBarPanel from "./SideBarPanel.js";
import Cart from "./Cart.js";
import "./css/MainSection.css";
import React, { useState } from "react";
import CartItem from "./CartItem.js";


    
function MainSection({classname, menuItems}) {
    
    const [addedItems, setAddedItems] = useState([]);
    const [cartItemsDisplayed, setCartItemsDisplayed] = useState([]);
  

    function refreshCartItemsDisplayed(){ 
        setCartItemsDisplayed(addedItems.map( (items) => { 
            return <CartItem name={items.name} price={items.price}/>
        }));
        console.log(addedItems);
    }
    
    const handleClicks = []; 
    let handleClickscounter = 0;
    const foodCardItems = menuItems.map((items) => { 
        handleClicks[handleClickscounter] = () => { 
            setAddedItems([...addedItems, {name:items.name, price:items.price} ]);
            refreshCartItemsDisplayed(); 
            console.log("Printed in handleClicks")
             }
        handleClickscounter++;
        return <FoodCard name={items.name} price={items.price} src={items.src} handler={handleClicks[handleClickscounter - 1]} />;
    });

    return (
        <main role="Menu" className="Menu">

            <div className="MenuMainPart">
            <SideBarPanel classname={classname}/>
                {foodCardItems}
            </div>

            <div className="CartSection" >
            <Cart variable={cartItemsDisplayed}/>
            </div>
        </main>
    );
}

export default MainSection;