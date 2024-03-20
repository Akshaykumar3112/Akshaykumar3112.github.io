import './css/restorentfooter.css';
import { Link } from 'react-router-dom';

function Footer() {
  
  return (
    <footer>
        <div className="footerContainer">
            <div className="box">
                <a href="https://www.google.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.google.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.google.com/"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.google.com/"><i className="fa-brands fa-google-plus"></i></a> 
                <a href="https://www.google.com/"><i className="fa-brands fa-youtube"></i></a> 
            </div>
            <div className="footerNav">
                <ul>
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/ourservices">OurServices</Link></li>
                <li className="item"><Link to="/aboutus">About Us</Link></li>
                <li className="item"><Link to="/contactusgi">Contact Us</Link></li>
                </ul>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Designed by <span className="designer">@Askhay</span></p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;