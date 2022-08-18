import {setAmount, deposit, withdraw} from "./bankSlice";
import { useDispatch ,useSelector} from "react-redux";
//import{store}from "./store";

const Bank= () => {
    const {amount}=useSelector((store)=>store.Bank)
    const dispatch=useDispatch();
    return(
        <div className="app">
        <div>Bank page</div>
        <input type="text" value={amount} onChange={(e)=>{dispatch(setAmount(e.target.value))}}></input>
        <button>Deposit</button>
        <button>Withdraw</button>
        </div>
    )

}
export default Bank;