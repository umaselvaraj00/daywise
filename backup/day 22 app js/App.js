//import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
//import ListbyEvent from './component-test/ListbyEvent';
//import Quantity from './Quantity';
import './Todo.css';
function App(){

// import Category from './Category';
// /import Category from "./Category";
//import Contactus from './Contactus';
//import ConditionalRender from './day13/ConditionalRender';
//import Welcome from './Welcome';
//import List from './List';

//import Bank from './Bank';
//import Count from './Count';
//import Contactus from './Contactus';
//import Create from './Create'
//import Todo from './Todo';
//import{ createContext, useState} from "react";
// export const appContext=createContext("");
// export default function App() {
// const [useName,setUseName]=useState("ABC");

  return(
    <BrowserRouter>
    <appContext.Provider value={{loginUser:useName}}>
    <div className="app">
    <div>
    <input type="text" vlue={useName}
    onChange={(e)=>setUseName(e.target.value)}></input> </div>
   
    
            Day17 class-react router
            <ul>
                <li>
                    <NavLink className="Link" to="/" activeClassName="active">Home</NavLink>
                </li>         
                <li>
                    <Link className="Link" to="/category">Category</Link>
                </li>
                <li>
                    <Link  className="Link"to="/order">Order</Link>
                </li>
                <li>
                    <Link className="Link" to="/product">Product</Link>
                </li>
                <li>
                    <Link className="Link" to="/aboutus">Aboutus</Link>
                </li>
            </ul>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/aboutus" >
                <Route index={true} element={<Aboutus/>}/>
                <Route path="contactus" element={<Contactus/>}/>
                </Route>
            <Route path="*" element={<Pagenotfound/>}/>
            <Route path="/user/:id" element={<User/>}/>
        </Routes>
    </div>
    </appContext.Provider>
 </BrowserRouter>

//  );
// return(
//   <div  className="app">
//     <Todo/>
//   </div>

)
}
export default App;

