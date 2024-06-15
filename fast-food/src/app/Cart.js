import "./css/Cart.css";

function Cart({variable}){

    return(
        <section className="Cart">
            <div className="structure">
                <p>item</p>
                <p>price</p>
            </div>
            {variable}
        </section>
    );
}

export default Cart;