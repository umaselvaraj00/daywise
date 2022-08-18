import { useContext } from "react";
import { appContext } from "./App";
const Order=()=>{
    const appCtx=useContext(appContext);
    return(<div className="order"><h1>Order Page</h1>
    <h2>{appCtx.loginUser}</h2></div>)
    }
export default  Order;