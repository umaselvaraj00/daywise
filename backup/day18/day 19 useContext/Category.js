import { useContext } from "react";
import { appContext } from "./App";
const Category=()=>{
    const appCtx = useContext(appContext);
    return(<div className="category">
    <h1>Category is are</h1><br></br>
       <h3> 1.product<br></br>
        2.anything</h3>
        <h2>{appCtx.loginUser}</h2>
        </div>)
}
export default Category;