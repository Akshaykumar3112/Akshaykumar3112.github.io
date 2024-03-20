import member1 from '../images/t1.jpg';
import member2 from '../images/member1.png';
import member3 from '../images/t2.jpg';
import member4 from '../images/member2.png';
import '../css/restorent.css';
function OurTeam() {
  
    return (
        <div className="team-section">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1 className="h-primary center">Our Team</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Provident placeat quas doloribus totam, libero ea!</p>
                    </div>
                </div>
                <div className="team-card">
                    <div className="card">
                        <div className="image-section">
                            <img src={member1} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Cherry</h3>
                            <h5>Head shef</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!</p>
                        </div>
                    </div>
                
                    <div className="card">
                        <div className="image-section">
                            <img src={member2} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Jeny</h3>
                            <h5>Head shef</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-section">
                            <img src={member3} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Bryan</h3>
                            <h5>Assistent shef</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-section">
                            <img src={member4} alt=""/>
                        </div>
                        <div className="content">
                            <h3>Justin</h3>
                            <h5>Assistent shef</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    export default OurTeam;