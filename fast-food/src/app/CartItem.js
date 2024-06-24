import "./css/CartItem.css"

function CartItem({name, price}){

    return(
        <div className="cartItem">
        <p>{name}</p>
        <p>${price}</p>
        </div>
    );
}

export default CartItem;