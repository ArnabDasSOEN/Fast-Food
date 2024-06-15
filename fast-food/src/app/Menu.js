//The purpose of this file is to create a level of abstraction above the MainSection component, so that we can pass an array of objects (which are the menu items). This faciliates
//other things like handling button clicks.
import MainSection from "./MainSection.js";

function Menu({displayed}){
    
    const menuItems = [
        {name:"pizza",          price:2.99,  src:"https://thumb.ac-illust.com/80/80ab92336666da6aa961462289dc6508_t.jpeg"},
        {name:"drink",          price:0.99,  src:"https://static.vecteezy.com/system/resources/previews/022/025/421/original/soda-drink-in-pixel-art-style-vector.jpg"},
        {name:"chicken burger", price:4.99,  src:"https://static.vecteezy.com/system/resources/thumbnails/021/587/309/small_2x/pixel-art-illustration-burger-pixelated-pop-burger-food-fast-food-burger-pixelated-for-the-pixel-art-game-and-icon-for-website-old-school-retro-vector.jpg"},
        {name:"fries",          price:1.99,  src:"https://static.vecteezy.com/system/resources/previews/021/554/258/original/fried-fries-in-pixel-art-style-vector.jpg"},
        {name:"Ice Cream[1]",   price:1.99,  src:"https://t3.ftcdn.net/jpg/05/59/28/08/360_F_559280859_wRHpyzbPWspMxJb9Ncw6vvnxZobIUVBC.jpg"},
        {name:"Ice Cream[2]",   price:2.99,  src:"https://t4.ftcdn.net/jpg/04/17/46/45/360_F_417464522_uIqXpFdRTtPBw5CF3RxQs13bouIAo86Y.jpg"},
        {name:"smoothie",       price:1.99,  src:"https://i.pinimg.com/564x/45/7f/7f/457f7fe030a15b981109e2805d38da4d.jpg"},
        {name:"milkshake",      price:1.99,  src:"https://i.pinimg.com/736x/63/2e/2d/632e2d6381c152adcaeed27139b64054.jpg"},
        {name:"pasta",          price:3.99,  src:"https://i.pinimg.com/originals/a5/48/88/a54888b2dd1749817f87bb2ec279a048.jpg"},
        {name:"sea food",       price:2.99,  src:"https://static.vecteezy.com/system/resources/previews/000/681/081/original/seafood-thin-line-and-pixel-perfect-icons.jpg"},
        {name:"sushi",          price:1.99,  src:"https://thumb.ac-illust.com/c6/c613dfaa4bcbcc18e980eaf36f55979f_t.jpeg"},
        {name:"cheese burger",  price:2.99,  src:"https://previews.123rf.com/images/kmarfu/kmarfu1807/kmarfu180700026/104604012-pixel-art-hamburger-isolated-on-white-background.jpg"}
    ];

return (
    <MainSection classname={displayed} menuItems={menuItems} />
);


}

export default Menu;
//this is all suppposed to be in the MainSection.js file but i removed it for cleaniness Since this Menu.js file is only important to pass down a prop.
 /*
    <FoodCard name="pizza" price={2.99} src="https://thumb.ac-illust.com/80/80ab92336666da6aa961462289dc6508_t.jpeg"/>
    <FoodCard name="drink" price={0.99} src="https://static.vecteezy.com/system/resources/previews/022/025/421/original/soda-drink-in-pixel-art-style-vector.jpg"/>
    <FoodCard name="chicken burger" price={4.99} src="https://static.vecteezy.com/system/resources/thumbnails/021/587/309/small_2x/pixel-art-illustration-burger-pixelated-pop-burger-food-fast-food-burger-pixelated-for-the-pixel-art-game-and-icon-for-website-old-school-retro-vector.jpg"/>
    <FoodCard name="fries" price={1.99} src="https://static.vecteezy.com/system/resources/previews/021/554/258/original/fried-fries-in-pixel-art-style-vector.jpg"/>
    <FoodCard name="Ice Cream[1]" price={1.99} src="https://t3.ftcdn.net/jpg/05/59/28/08/360_F_559280859_wRHpyzbPWspMxJb9Ncw6vvnxZobIUVBC.jpg"/>
    <FoodCard name="Ice Cream[2]" price={2.99} src="https://t4.ftcdn.net/jpg/04/17/46/45/360_F_417464522_uIqXpFdRTtPBw5CF3RxQs13bouIAo86Y.jpg"/>
    <FoodCard name="smoothie" price={1.99} src="https://i.pinimg.com/564x/45/7f/7f/457f7fe030a15b981109e2805d38da4d.jpg"/>
    <FoodCard name="milkshake" price={1.99} src="https://i.pinimg.com/736x/63/2e/2d/632e2d6381c152adcaeed27139b64054.jpg"/>
    <FoodCard name="pasta" price={3.99} src="https://i.pinimg.com/originals/a5/48/88/a54888b2dd1749817f87bb2ec279a048.jpg"/>
    <FoodCard name="sea food" price={2.99} src="https://static.vecteezy.com/system/resources/previews/000/681/081/original/seafood-thin-line-and-pixel-perfect-icons.jpg"/>
    <FoodCard name="sushi" price={1.99} src="https://thumb.ac-illust.com/c6/c613dfaa4bcbcc18e980eaf36f55979f_t.jpeg"/>
    <FoodCard name="cheese burger" price={2.99} src="https://previews.123rf.com/images/kmarfu/kmarfu1807/kmarfu180700026/104604012-pixel-art-hamburger-isolated-on-white-background.jpg"/>
    */

    /*
    const addedItems = [];
    const [numOfAddedItems, setNumOfAddedItems] = useState(0);
    let cartItemsDisplayed = 42;

    function refreshCartItemsDisplayed(){
        cartItemsDisplayed = addedItems.map( (items) => {
            return <CartItem name={items.name} price={items.price}/>
        });
        console.log(addedItems);
    }
    */
    // const handle0 = () => {
    //     addedItems[numOfAddedItems] = {name:"pizza", price:2.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle1 = () => {
    //     addedItems[numOfAddedItems] = {name:"drink", price:0.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle2 = () => {
    //     addedItems[numOfAddedItems] = {name:"chicken burger", price:4.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle3 = () => {
    //     addedItems[numOfAddedItems] = {name:"fries", price:1.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle4 = () => {
    //     addedItems[numOfAddedItems] = {name:"Ice Cream[1]", price:1.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle5 = () => {
    //     addedItems[numOfAddedItems] = {name:"Ice Cream[2]", price:2.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle6 = () => {
    //     addedItems[numOfAddedItems] = {name:"smoothie", price:1.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle7 = () => {
    //     addedItems[numOfAddedItems] = {name:"milkshake", price:1.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle8 = () => {
    //     addedItems[numOfAddedItems] = {name:"pasta", price:3.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle9 = () => {
    //     addedItems[numOfAddedItems] = {name:"sea food", price:2.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle10 = () => {
    //     addedItems[numOfAddedItems] = {name:"sushi", price:1.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
    // const handle11 = () => {
    //     addedItems[numOfAddedItems] = {name:"cheese burger", price:2.99};
    //     setNumOfAddedItems(numOfAddedItems + 1);
    //     refreshCartItemsDisplayed();
    // }
   
    //array of objects
    // const menuItems = [
    //     {name:"pizza",          price:2.99, handler:handle0, src:"https://thumb.ac-illust.com/80/80ab92336666da6aa961462289dc6508_t.jpeg"},
    //     {name:"drink",          price:0.99, handler:handle1, src:"https://static.vecteezy.com/system/resources/previews/022/025/421/original/soda-drink-in-pixel-art-style-vector.jpg"},
    //     {name:"chicken burger", price:4.99, handler:handle2, src:"https://static.vecteezy.com/system/resources/thumbnails/021/587/309/small_2x/pixel-art-illustration-burger-pixelated-pop-burger-food-fast-food-burger-pixelated-for-the-pixel-art-game-and-icon-for-website-old-school-retro-vector.jpg"},
    //     {name:"fries",          price:1.99, handler:handle3, src:"https://static.vecteezy.com/system/resources/previews/021/554/258/original/fried-fries-in-pixel-art-style-vector.jpg"},
    //     {name:"Ice Cream[1]",   price:1.99, handler:handle4, src:"https://t3.ftcdn.net/jpg/05/59/28/08/360_F_559280859_wRHpyzbPWspMxJb9Ncw6vvnxZobIUVBC.jpg"},
    //     {name:"Ice Cream[2]",   price:2.99, handler:handle5, src:"https://t4.ftcdn.net/jpg/04/17/46/45/360_F_417464522_uIqXpFdRTtPBw5CF3RxQs13bouIAo86Y.jpg"},
    //     {name:"smoothie",       price:1.99, handler:handle6, src:"https://i.pinimg.com/564x/45/7f/7f/457f7fe030a15b981109e2805d38da4d.jpg"},
    //     {name:"milkshake",      price:1.99, handler:handle7, src:"https://i.pinimg.com/736x/63/2e/2d/632e2d6381c152adcaeed27139b64054.jpg"},
    //     {name:"pasta",          price:3.99, handler:handle8, src:"https://i.pinimg.com/originals/a5/48/88/a54888b2dd1749817f87bb2ec279a048.jpg"},
    //     {name:"sea food",       price:2.99, handler:handle9, src:"https://static.vecteezy.com/system/resources/previews/000/681/081/original/seafood-thin-line-and-pixel-perfect-icons.jpg"},
    //     {name:"sushi",          price:1.99, handler:handle10, src:"https://thumb.ac-illust.com/c6/c613dfaa4bcbcc18e980eaf36f55979f_t.jpeg"},
    //     {name:"cheese burger",  price:2.99, handler:handle11, src:"https://previews.123rf.com/images/kmarfu/kmarfu1807/kmarfu180700026/104604012-pixel-art-hamburger-isolated-on-white-background.jpg"}
    // ];