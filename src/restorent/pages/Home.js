import '../css/Pesto.css';
import Services from '../components/Services';
import OurTeam from '../components/OurTeam';
function Home() {
  
    return (
        <>
            <section id="home">
                <h1 className="h-primary"> Welcome to Pesto Italian Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos asperiores sunt molestiae, </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odit. </p>    
            </section>
            <Services/>
            <OurTeam/>
        </>

    );
}
export default Home;