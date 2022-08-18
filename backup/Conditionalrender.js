import Welcomes from "./Welcomes";
const Conditionalrender=()=>{
    const isLoggedIn=0;
    //  if(isLoggedIn){
    //   return(<Welcomes/>)
    //  }
    //  else{
    //     return(<div>Not logged-In</div>)
    //  }

   // return(<div>{isLoggedIn && <Welcomes/>}</div>)
   return(<div>{isLoggedIn ? <Welcomes/>:"Not logged-In"} </div>)

}
export default Conditionalrender;