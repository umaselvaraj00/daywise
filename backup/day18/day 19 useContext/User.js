import { useParams } from "react-router-dom";
const User=()=>{
    const{id}=useParams();
        return(<div>
        User Page
        <h1>Welcome to {id}.....</h1></div>)
}
export default User;