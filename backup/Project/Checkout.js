import { useContext } from "react";
import {appContext} from "../../src/App";

const Checkout=()=>{
    const appCtx=useContext(appContext);
    console.log(appCtx.addToCart)
}
return(
    <div>
    (
        <h3>{appCtx.addToCart}</h3>
    )
    </div>
)
export default Checkout;