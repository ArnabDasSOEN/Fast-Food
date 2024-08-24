import "./css/CartItem.css"

function CartItem({name, price, handleDelete}){

    return(
        <div className="cartItem">
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={handleDelete}>X</button>
        </div>
    );
}

export default CartItem;