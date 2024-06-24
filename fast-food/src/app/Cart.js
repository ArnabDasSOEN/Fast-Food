import "./css/Cart.css";

function Cart({variable, total}){

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
            </div>
        </section>
    );
}

export default Cart;