import { setAmount,deposit,withdraw } from "./bankSlice";
import { useDispatch,useSelector } from "react-redux";
import { store } from "./store";



const Bank =() => {
    const {amount,bankbalance} = useSelector((store)=>store.bank);
    const dispatch = useDispatch();
    return(
        <div className="app">
            <div>Bank page</div>
            <input type="text" value={amount} onChange={(e)=> {dispatch(setAmount(e.target.value))}}></input>
            <button onClick={()=>{dispatch(deposit(Number(amount)))}}> Deposit</button>
            <button onClick={()=>{dispatch(withdraw(Number(amount)))}}>Withdraw </button>
            <div>{bankbalance}</div>
            
            
           
    </div>
        

    )
    


}
export default Bank;
