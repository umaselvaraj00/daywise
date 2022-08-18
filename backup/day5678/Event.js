
import Eventchild from "./Eventchild";

const Event =()=>
{

    function sayHelloWorld(){alert("Hello world")}
    return(
      <div>
      <button onclick={sayHelloWorld}>call function say hello world</button>
      <button onClick={()=>alert("Hello World")}>Inline function say hello world</button>
      <button onClick={()=>{alert("Hello World"); sayHelloWorld();}}>Inline multiple function say hello world</button>
      <button value="Hello World!!" onClick={(e)=>alert(e.target.value)}>value to inline function say hello world</button>
      <Eventchild event={sayHelloWorld}/>
      </div>
    )
    

    
    }      
export default Event;