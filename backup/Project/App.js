import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import Order from './Order';
import Quantity from './Quantity';
function App()
{
    return(
        <div className='App'>
        <Order/>
        <Quantity/>
        <BrowserRouter>
        <ul>
            <li>                     
            <NavLink className="Link" to="/" activeClassName="active">Order</NavLink>
                </li>         
                <li>
                     <Link className="Link" to="/Quantity">Quantity</Link>
                 </li>
        </ul>
        <Routes>
            <Route path="/order" >
            <Route index={true} element={<order/>}/>
            <Route path="quantity" element={<Quantity/>}/>
            </Route>
        </Routes>
         </BrowserRouter>
        
        </div>
    )
    
    }
    export default App;
    
    