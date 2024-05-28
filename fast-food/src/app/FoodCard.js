import "./css/FoodCard.css"



function FoodCard(props){
//source of image will be provided as a prop through prop name "src"
//3 props necessary: name, price and image source.
    return(
        <div className="card">
            <img id="CardImage" src={props.src}></img>
            <div className="CardInfo">
                <h4 className="NameOfFood">{props.name}</h4>
                <h5 className="PriceOfFood">${props.price}</h5>
            </div>
            <div className="CardButtons">
                <button>Buy</button>
                <button>info</button>
            </div>
        </div>
    );
}

export default FoodCard;