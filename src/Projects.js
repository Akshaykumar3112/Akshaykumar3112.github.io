import './portfolio.css';
import Restorent from './image/restorent.png';
import Bmi from './image/bmi.png';
import { Link } from 'react-router-dom';
function Projects(){
    return(
        <section id='projects'>
            <div className='container'>
                <Link  to="/projects/restorent">
                    <div className='cardlist'> 
                        <div className='card'>
                            <img src={Restorent} alt="" />
                        </div>
                        <div className='card-info'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='title'>
                            <h1>Restorent</h1>
                        </div>
                    </div>
                </Link>
                <Link  to="/projects/bmicalculator">
                    <div className='cardlist'>
                        <div className='card'>
                            <img src={Bmi} alt="" />
                        </div>
                        <div className='card-info'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='title'>
                            <h1>BMI Calculator</h1>
                        </div>
                    </div>
                </Link>
                <Link  to="/projects/dictionary">
                    <div className='cardlist'>
                        <div className='card'>
                            <img src={Restorent} alt="" />
                        </div>
                        <div className='card-info'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='title'>
                            <h1>Dictionary App</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
export default Projects;