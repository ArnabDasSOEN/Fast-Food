import FoodCard from "./FoodCard.js";
import SideBarPanel from "./SideBarPanel.js";
import Cart from "./Cart.js";
import "./css/MainSection.css";
import React, { useState } from "react";
import CartItem from "./CartItem.js";


    
function MainSection({classname, menuItems}) {
    const addedItems = []; //array holding the items added to the cart
    //a number that will hold the value of the number of added items in the cart and set the index to where the next item should be added
    const [numOfAddedItems, setNumOfAddedItems] = useState(0);
    
    //This is for the cart. Since its a component that displays items (which is dynamic) It needs to be put into a state in order for react to rerender it.
    const [cartItemsDisplayed, setCartItemsDisplayed] = useState(addedItems.map( (items) => {
             return <CartItem name={items.name} price={items.price}/>
         }));
    //function that will rerender the cartItemsDisplayed variable above.
    function refreshCartItemsDisplayed(){
        setCartItemsDisplayed(addedItems.map( (items) => {
            return <CartItem name={items.name} price={items.price}/>
        }));
        console.log(addedItems);
    }


    //array of functions responsible for handling the onClick event inside the FoodCards buttons
    const handleClicks = []; //we need the functions to still exist to handle the onClick events. in other words, we need pointers to point to those functions so that they stay in heap.
                             //Arrays are pointers. Each index is a pointer. Consequently, this problem is solved by having an array of functions that all handle the onClick events of the food
                             //cards
    let handleClickscounter = 0;
    const foodCardItems = menuItems.map((items) => { //menuItems is the array passed to this component from the page.js file. We do this because the alternative is to write each foodcard and
                                                     // handleClick events manually.
        handleClicks[handleClickscounter] = () => { //were just creating the function, were not calling or doing anything here.
                 addedItems[numOfAddedItems] = {name:items.name, price:items.price};
                 setNumOfAddedItems(numOfAddedItems + 1);
                 refreshCartItemsDisplayed();//refreshing the items displayed in the cart.
             }
             handleClickscounter++;

        return <FoodCard name={items.name} price={items.price} src={items.src} handler={handleClicks[handleClickscounter - 1]} />;
        //I was not aware we could do this. But essentially, you can have a looping system that returns a bunch of components, encapsulate all of this inside a variable, and then simply return
        //that variable and it's going to return all those components.
        //So instead of having 15 different foodcards in the return section, you can have a single variable that contains all those food cards.
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