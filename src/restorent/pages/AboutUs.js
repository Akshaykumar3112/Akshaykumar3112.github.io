import '../css/Pesto.css';
import OurTeam from '../components/OurTeam';
import About from '../images/121.jpg';
import About2 from '../images/banner1.jpg';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
function AboutUs() {
  
    return (
        <>
            <Navbar/>
            <section id="aboutus">
                <h1 className='h-primary'>Pesto Italian Food</h1>
            </section>
            <section className="aboutus">
                <h1 className='h-primary'>Our Story</h1>
                <div className="main"> 
                    <img src={About} alt=""/>
                    <div className="about-text">
                        <h1 className="h-secondary">WHO WE ARE</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit culpa beatae modi inventore explicabo dolorem blanditiis,Obcaecati reprehenderit culpa beatae modi inventore explicabo dolorem blanditiis possimus alias consectetur tempora quaerat fugit natus architecto incidunt neque atque. Error, nihil.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="about-text">
                        <h1 className="h-secondary">SINCE 1920</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit culpa beatae modi inventore explicabo dolorem blanditiis,Obcaecati reprehenderit culpa beatae modi inventore explicabo dolorem blanditiis possimus alias consectetur tempora quaerat fugit natus architecto incidunt neque atque. Error, nihil.</p>
                    </div>
                    <img src={About2} alt=""/>
                </div>
            </section>
            
            <OurTeam/>
            <Footer/>
        </>

    );
}
export default AboutUs;