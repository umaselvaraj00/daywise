import{increment,decrement} from "./countSlice";
import { useDispatch,useSelector } from "react-redux";
import { store } from "./store";

const Count=()=>{
    const {Count} = useSelector((store)=>store.Count);
    const dispatch = useDispatch();
    return(
        <div className="app">
            <div>COUNTER</div>
            <button onClick={()=>{dispatch(increment(Count))}}> +</button> 
            {Count}
            <button onClick={()=>{dispatch(decrement(Count))}}> -</button>
            
    </div>
    );
}
export default Count;