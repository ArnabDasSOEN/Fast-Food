import FoodCard from "./FoodCard.js";
import SideBarPanel from "./SideBarPanel.js";
import Cart from "./Cart.js";
import "./css/MainSection.css";
import React, { useState } from "react";
import CartItem from "./CartItem.js";


    
function MainSection({classname, menuItems}) {
    //array holding the items added to the cart
    const addedItems = [];
    const [numOfAddedItems, setNumOfAddedItems] = useState(0);
    
    // TODO put cartItemsDisplayed as a useState variable since its a variable that changes dynamically.
    // let cartItemsDisplayed = addedItems.map( (items) => {
    //     return <CartItem name={items.name} price={items.price}/>
    // }); 

    const [cartItemsDisplayed, setCartItemsDisplayed] = useState(addedItems.map( (items) => {
             return <CartItem name={items.name} price={items.price}/>
         }));
         
    function refreshCartItemsDisplayed(){
        setCartItemsDisplayed(addedItems.map( (items) => {
            return <CartItem name={items.name} price={items.price}/>
        }));
        console.log(addedItems);
    }


    //array of functions responsible for handling the onClick event inside the FoodCards buttons
    const handleClicks = [];
    let counter = 0;
    const foodCardItems = menuItems.map((items) => {
        handleClicks[counter] = () => { //were just creating the function, were not calling or doing anything here.
                 addedItems[numOfAddedItems] = {name:items.name, price:items.price};
                 setNumOfAddedItems(numOfAddedItems + 1);
                 refreshCartItemsDisplayed();//TODO this code is buggy, does not display in Cart section the items added.
             }
        counter++;

        return <FoodCard name={items.name} price={items.price} src={items.src} handler={handleClicks[counter - 1]} />;
    });
   
    //when you use curly braces in the return section of a JSX component. Its to indicate that we are leaving React and entering the world of regular javascript.
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