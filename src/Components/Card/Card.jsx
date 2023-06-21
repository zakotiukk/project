import React, {useState} from "react";
import "./Card.css";
import Button from "../Buttons/Button";
function Card({book}){
    const [count, setCount] = useState(0);
    const {title,Image, price, id} = book;
    const handleIncrement =()=>{
        setCount(count+1)
    }
    const handleDecrement =()=>{
        setCount(count+1)
    }

    return <div className="card">
        <span className={`${count !==0 ? "card_badge" : "card_badge--hidden"}`}>
            {count} </span>
        <div className="image_container">
            <img src={Image} alt={title}/>
        </div>
        <h4 className="card-title">
            {title} .<span className="card_price">{price}</span>
        </h4>

        <div className="btn-container">
            <Button title={"Додати в корзину"} type={"add"} onClick={handleIncrement} />
            {count!==0 ?(
                <Button title={"В обране"} type={"remove"} onClick={handleDecrement}/>
            ):(
                ""
            )}
        </div>
        </div>  
}

export default Card