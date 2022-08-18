import { useState } from "react";
import useDisable from "./useDisable";

const Quantity =()=>{
    const [quantity,setQuantity]=useState(0);

    const QuantityMax =()=>{
        setQuantity(quantity+1);
     
    }
    const QuantityMin=()=>{
        setQuantity(quantity-1);
      
    };
    const disableMin=useDisable(quantity);
    return(
        <div className="app">
        <h1>Quantity level</h1>
        <input type ="text" className="qty" value ={quantity}></input>
        <button onClick={QuantityMax}>+</button>
        <button onClick={QuantityMin}  disabled={disableMin}>-</button>
        </div>
    )
    
}
export default Quantity;