import "./css/Cart.css";
//variable is the cart items being displayed
function Cart({variable, total, handleReset}){

    return(
        <section className="Cart">
            <div className="structure">
                <p>item</p>
                <p>price</p>
            </div>

            <div className="total">total: ${total}</div>

            <div>
            {variable}
            </div>
            <div className="cartButtons">
                <button className="cartButton">Buy</button>
                <button className="cartButton" onClick={handleReset}>Reset</button>
            </div>
        </section>
    );
}

export default Cart;