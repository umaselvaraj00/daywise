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
        
        <button onClick={QuantityMax}>+</button>
        <input type ="text" className="qty" value ={quantity} size="1"></input>
        <button onClick={QuantityMin}  disabled={disableMin}>-</button>  <br></br><br></br>
        <label>Price:</label>
        </div>
    );
    
}

export default Quantity;