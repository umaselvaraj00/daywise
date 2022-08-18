import { useEffect,useState } from "react";

const useDisable=(quantity)=>{
    const[disableMin,setDisableMin]=useState(false);
    useEffect(()=>{
        if(quantity <= 0){
            setDisableMin(true);
        }else{
            setDisableMin(false);
        }
    },[quantity]);
    return disableMin;
};
export default useDisable;