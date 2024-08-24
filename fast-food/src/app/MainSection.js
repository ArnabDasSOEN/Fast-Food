import FoodCard from "./FoodCard.js";
import SideBarPanel from "./SideBarPanel.js";
import Cart from "./Cart.js";
import "./css/MainSection.css";
import React, { useState } from "react";
import CartItem from "./CartItem.js";
import { v4 as uuidv4 } from "uuid";

   
function MainSection({classname, menuItems}) {
    const [total, setTotal] = useState(0);
    const [addedItems, setAddedItems] = useState([]); //variable containing items added to cart
    const [cartItemsDisplayed, setCartItemsDisplayed] = useState([]); //variables containing items displayed on cart
    //since both of these components change dynamically during runTime, they need to be contained in a state variable. This is why we use useState. Otherwise, it just wouldn't work.
    //it would never update.
  
    //an empty array does not have the .map function. It's technical stuff. However, this code is okay becuase it just defines the function, so the function calls inside of this function
    //don't actually call. When you define a function, everything inside of it doesn't run, it only gets initialized. Addtionally, this code only runs after something is added in the array
    //addedItems. See following block of code.

    //we need the functions to still exist to handle the onClick events. in other words, we need pointers to point to those functions so that they stay in the heap.
    //Arrays are pointers. Each index is a pointer. Consequently, this problem is solved by having an array of functions that all handle the onClick events of the food
    //cards
    const handleClicks = []; 
    let handleClickscounter = 0;
    const foodCardItems = menuItems.map((items) => { 
        handleClicks[handleClickscounter] = () => { //were just creating the function here, not calling anything
            //our added items inside the cartItemsDisplayed and addedItems arrays need the same ID so we can refer to the same item with 1 ID inside both arrays
            const ID = uuidv4(); //creates a unique ID.
            setAddedItems([...addedItems, {id:ID, name:items.name, price:items.price} ]);//the function is not getting called when initialized, it only gets called when the onClick events occurs
            //console.log("Printed in handleClicks") //you can observe this through this print statement. It doesnt print it 12 times when the website loads.
            
            //when an item gets selected for deletion, we need to know which one. We do this through the unique ID each item has. Which is why the id must be passed inside the parameters
            const handleItemDelete = (id) => { 
                //setTotal(total-items.price);
                //This will not work because when we create the function, we only have access to the data at the time when we created the function.
                //hence, "total" is 0 and we obtain a negative total value no matter what we delete.
                //alternatively, use this syntax approach, it works way better.
                setTotal( price => price - items.price)
                //we use the queue syntax for useState because if you don't, as soon as REACT finds a change, it will rerender so your delete operation is bugged.
                setAddedItems(foodItems => {return foodItems.filter(item => item.id !== id)});
                setCartItemsDisplayed(foodItems => { return foodItems.filter(item => item.key !== id)});
            }

            //for the handleDelete prop, we need to somehow pass in the ID that the function needs to keep track off if the item gets selected for deletion. Hence, we can't do
            // handleDelete={handleItemDelete(ID)} because that executes our function. Instead, we can wrap our function inside another function and pass in parameters.
            setCartItemsDisplayed([...cartItemsDisplayed, <CartItem key={ID} name={items.name} price={items.price} handleDelete={ () => handleItemDelete(ID) }/> ]);
            setTotal(total + items.price);
             }
        handleClickscounter++;
        return <FoodCard key={handleClickscounter-1} name={items.name} price={items.price} src={items.src} handler={handleClicks[handleClickscounter - 1]} />;
        //I was not aware we could do this. But essentially, you can have a looping system that returns a bunch of components, encapsulate all of this inside a variable, and then simply return
        //that variable and it's going to return all those components.
        //So instead of having 15 different foodcards in the return section in series, you can have a single variable that contains all those food cards.
    });

    //creating the onClick event handler for resetting the entire Cart
    const handleResetCartOnClick = () => {
        setAddedItems([]);
        setCartItemsDisplayed([]);
        setTotal(0);
    }

    //when you use curly braces in the return section of a JSX component. Its to indicate that we are leaving React and entering the world of regular javascript.
    return (
        <main role="Menu" className="Menu">

            <div className="MenuMainPart">
            <SideBarPanel classname={classname}/>
                {foodCardItems}
            </div>
            <div className="CartSection" >
            <Cart variable={cartItemsDisplayed} total={total} handleReset={handleResetCartOnClick} />
            </div>
        </main>
    );
}


export default MainSection;