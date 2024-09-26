import "./css/Cart.css";
import axios from "axios";
axios.defaults.withCredentials = true;
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

//variable is the cart items being displayed
function Cart({variable, total, handleReset, arrayItem}){

    const handleBuyOnClick = (e) => {
        e.preventDefault();
        //code to make post request with axios to server
        //must create /buy RESTful route in backend server
        //must send the data to the backend

        axios.post("http://localhost:3000/buy",arrayItem)
            .then( () => {
                if(arrayItem.length === 0){
                  //  toast.error("cannot send empty order!");
                }
                else{
                    handleReset();
                  //  toast.success("Succesfully sent order!")
                }
            })
            .catch( () => {
                console.log("Error buying product");
               // toast.error("Error buying product");
            })

        

    }



    return(
        <section className="Cart">
            {/* <ToastContainer /> */}
            <div className="structure">
                <p>item</p>
                <p>price</p>
            </div>

            <div className="total">total: ${total}</div>

            <div>
            {variable}
            </div>
            <div className="cartButtons">
                <form onSubmit={handleBuyOnClick} method="POST">
                    <button className="cartButton">Buy</button>
                </form>
                <button className="cartButton" onClick={handleReset}>Reset</button>
            </div>
        </section>
    );
}

export default Cart;