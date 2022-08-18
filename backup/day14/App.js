//import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
//import './Todo.css'
// import Category from './Category';
// import Home from './Home';
// import Order from './Order';
// import Product from './Product';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import Pagenotfound from './Pagenotfound';
// import User from './User';
//import Category from "./Category";
//import Contactus from './Contactus';
//import ConditionalRender from './day13/ConditionalRender';
//import Welcome from './Welcome';
//import List from './List';

//import Bank from './Bank';
//import Count from './Count';
//import Contactus from './Contactus';
//import Create from './Create'
import Todo from './Todo';
function App()
{
  //return(
    //<div className="app">
   // <BrowserRouter>
    
//             Day17 class-react router
//             <ul>
//                 <li>
//                     <NavLink className="Link" to="/" activeClassName="active">Home</NavLink>
//                 </li>         
//                 <li>
//                     <Link className="Link" to="/category">Category</Link>
//                 </li>
//                 <li>
//                     <Link  className="Link"to="/order">Order</Link>
//                 </li>
//                 <li>
//                     <Link className="Link" to="/product">Product</Link>
//                 </li>
//                 <li>
//                     <Link className="Link" to="/aboutus">Aboutus</Link>
//                 </li>
//             </ul>

//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/category" element={<Category/>}/>
//             <Route path="/order" element={<Order/>}/>
//             <Route path="/product" element={<Product/>}/>
//             <Route path="/aboutus" >
//                 <Route index={true} element={<Aboutus/>}/>
//                 <Route path="contactus" element={<Contactus/>}/>
//                 </Route>
//             <Route path="*" element={<Pagenotfound/>}/>
//             <Route path="/user/:id" element={<User/>}/>
//         </Routes>
//     </div>
//  </BrowserRouter>
return(
   <div className="app">
        <Todo/>
        </div>
  );
}
export default App;

