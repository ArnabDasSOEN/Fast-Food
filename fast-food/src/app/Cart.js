import "./css/Cart.css";

function Cart({text}){

    return(
        <section className="Cart">
            <div className="structure">
                <p>item</p>
                <p>price</p>
            </div>

            <div className="text">
                <p>{text}</p>
            </div>


        </section>
    );
}

export default Cart;