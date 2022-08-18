import { useContext} from "react";
import { appContext } from "./App";
const Home=()=>{
    const appCtx = useContext(appContext);
    return(<div className="home">
     <h1>Welcom to the Home Page</h1 >
     <h2>{appCtx.loginUser}</h2>
     </div>)
};
export default Home;