import logo from './logo/logo1.jpg';
import './css/restorentnavbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
   
    return (
        <nav id="navbar">
            <div id="logo">
                <img src={logo}  alt="Pesto Italian Food"/> 
                <div className='logo-text'>
                    <h3>AKSHAYKUMAR</h3>
                </div>
            </div>
           
            <ul>
                <li className="item"><Link  to="/projects/restorent">Home</Link></li>
                <li className="item"><Link to="/restorent/ourservices">OurServices</Link></li>
                <li className="item"><Link to="/restorent/aboutus">About Us</Link></li>
                <li className="item"><Link to="/restorent/contactus">Contact Us</Link></li>
                <li className='item'><Link to="/restorent/cart"><i class="fa fa-cart-plus" aria-hidden="true"></i></Link></li>
                {/* <Link to="/home">Home</Link> */}
            </ul>
        </nav>
    );
}
export default Navbar;