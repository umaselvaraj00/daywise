import {Link} from 'react-router-dom';
const Aboutus=()=>{
    return(<div>
        About Page
        <ul>
           <li>
             <Link  className="Link"to="contactus">Contactus</Link>
           </li>
        </ul>
        </div>)
    }
export default Aboutus;