import './portfolio.css';
import image1 from './image/restorent.png';
import { Link } from 'react-router-dom';
function Projects(){
    return(
        <section className='projects'>
            <div className='container'>
                <Link  to="/projects/restorent">
                <div className='cardlist'> 
                    <div className='card'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='card-info'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='title'>
                        <h1>Restorent</h1>
                    </div>
                </div>
                </Link>
                <div className='cardlist'>
                    <div className='card'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='card-info'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='title'>
                        <h1>BMI Calculator</h1>
                    </div>
                </div>
                <div className='cardlist'>
                    
                    <div className='card'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='card-info'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='title'>
                        <h1>Dictonary App</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;