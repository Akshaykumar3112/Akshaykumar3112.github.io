import logo from './logo/logo1.jpg';
import './css/Portfolio.css';
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
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/ourservices">OurServices</Link></li>
                <li className="item"><Link to="/aboutus">About Us</Link></li>
                <li className="item"><Link to="/contactus">Contact Us</Link></li>
                {/* <Link to="/home">Home</Link> */}
            </ul>
        </nav>
    );
}
export default Navbar;