import './portfolio.css';
import image from './image/aaaa.jpg';
function Home(){
    return(
        <section id='home-portfolio'>
            <div className='content'>
                <div className='aboutme'>
                    <div className='image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='name'>
                    <h1> Hi, My Name is Akshaykumar Kajavadara. </h1>  
                    </div>
                </div>
                <div className='info'>
                    <p>A developer with a passion for learning and creating. I am a team player and seeking opportunities to grow.</p>
                    <div className='social-link'>
                        <a href="www.linkedin.com/in/akshaykumar-kajavadara-88b933156"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://akshaykumar3112.github.io/"><i className="fa-brands fa-github"></i></a> 
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <div className='skilllist'>
                    <ul>
                        <li>Proficient in React.js, HTML5, CSS3, PHP, and JavaScript.</li>

                        <li>Strong understanding of database (MySQL).</li>

                        <li>Excellent problem-solving and analytical skills</li>

                        <li>Understanding with version control systems such as Git.</li>

                        <li>Strong communication and interpersonal skills.</li>

                        <li>Passionate about learning new technologies and programming languages.</li>

                        <li>Team Management</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Home;