import FoodCard from "./FoodCard.js";
import SideBarPanel from "./SideBarPanel.js";
import Cart from "./Cart.js";
import "./css/MainSection.css";
import React, { useState } from "react";
import CartItem from "./CartItem.js";


    //TODO maybe use useEffect instead of useState due to rendering components as soon as a change occurs.
function MainSection({classname, menuItems}) {
    
    const [addedItems, setAddedItems] = useState([]); //variable containing items added to cart
    const [cartItemsDisplayed, setCartItemsDisplayed] = useState([]); //variables containing items displayed on cart
    //since both of these components change dynamically during runTime, they need to be contained in a state variable. This is why we use useState. Otherwise, it just wouldn't work.
    //it would never update.
  
    //an empty array does not have the .map function. It's technical stuff. However, this code is okay becuase it just defines the function, so the function calls inside of this function
    //don't actually call. When you define a function, everything inside of it doesn't run, it only gets initialized. Addtionally, this code only runs after something is added in the array
    //addedItems. See following block of code.
    function refreshCartItemsDisplayed(){ 
        setCartItemsDisplayed(addedItems.map( (items) => { 
            return <CartItem name={items.name} price={items.price}/>
        }));
        console.log(addedItems); //remove, this was used for debugging.
    }

    //we need the functions to still exist to handle the onClick events. in other words, we need pointers to point to those functions so that they stay in the heap.
    //Arrays are pointers. Each index is a pointer. Consequently, this problem is solved by having an array of functions that all handle the onClick events of the food
    //cards
    const handleClicks = []; 
    let handleClickscounter = 0;
    const foodCardItems = menuItems.map((items) => { 
        handleClicks[handleClickscounter] = () => { //were just creating the function here, not calling anything
            setAddedItems([...addedItems, {name:items.name, price:items.price} ]); //the function is not getting called when initialized, it only gets called when the onClick events occurs
            refreshCartItemsDisplayed(); //the function is not getting called when initialized, it only gets called when the onClick events occurs
            console.log("Printed in handleClicks") //you can observe this through this print statement. It doesnt print it 12 times when the website loads.
             }
        handleClickscounter++;


        return <FoodCard name={items.name} price={items.price} src={items.src} handler={handleClicks[handleClickscounter - 1]} />;
        //I was not aware we could do this. But essentially, you can have a looping system that returns a bunch of components, encapsulate all of this inside a variable, and then simply return
        //that variable and it's going to return all those components.
        //So instead of having 15 different foodcards in the return section in series, you can have a single variable that contains all those food cards.

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