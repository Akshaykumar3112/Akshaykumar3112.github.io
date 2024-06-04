
import './css/portfolionavbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
   
    return (
        <nav id="portfolio-navbar">
             <div id="logo"> 
                <div className='logo-text'>
                    <h2>AKSHAY</h2>
                </div>
            </div> 
            <ul>
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/Projects">Projects</Link></li>
                <li className="item"><Link to="/aboutus">About</Link></li>
                <li className="item"><Link to="/contactus">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;