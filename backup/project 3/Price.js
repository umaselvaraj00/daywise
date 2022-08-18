import { useState,useEffect } from "react";
// import useDisable from "./useDisable";
import {quantity} from "../../src/Quantity"

function Price(){
    
        const [price,setPrice]=useState([]);
        
        useEffect(()=>{
        fetch("http://localhost:4000/todotask").then(response=>{setPrice(response.price)})
    },[]);
    
        console.log(Price);

    function amount(){
        const [amount,setAmount]=useState(0)
        setAmount=quantity*(console.log(Price));
        }
        console.log(setamount);

    return(
    <div className="app">
    <label>Price</label>
    {Price.map((price)=>{
        return{price}
    })}
    <input type="text" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
)
};
export default Price;




