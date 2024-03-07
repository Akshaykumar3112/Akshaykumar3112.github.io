import '../css/Pesto.css';
import Services from '../components/Services';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function OurServices() {
  
    return (
        <>
            <Navbar/>
            <section className="product" >
                <h1 className="h-primary"> Welcome to Pesto Italian Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos asperiores sunt molestiae, </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odit. </p>
                
            </section>
            <Services/>
            <Footer/>
        </>

    );
}
export default OurServices;