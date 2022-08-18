import { useContext } from "react";
import { appContext } from "./App";
const Product=()=>{
    const appCtx = useContext(appContext);
    return(<div className="product"><h1>Product Page</h1>
        <h2>{appCtx.loginUser}</h2> </div>)
}
export default Product;