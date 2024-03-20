import '../css/restorent.css';
import Services from '../components/Services';
import OurTeam from '../components/OurTeam';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
function Restorent() {
  
    return (
        <>
            <Navbar/>
            <section id="home">
                <h1 className="h-primary"> Welcome to Pesto Italian Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos asperiores sunt molestiae, </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odit. </p>    
            </section>
            <Services/>
            <OurTeam/>
            <Footer/>
        </>

    );
}
export default Restorent;