import member1 from '../images/t1.jpg';
import member2 from '../images/member1.png';
import member3 from '../images/t2.jpg';
import member4 from '../images/member2.png';
import '../css/restorent.css';
import TeamCard from './TeamCard';
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
                    <TeamCard 
                        img={member1} 
                        name="Devid" 
                        position="Head Shef"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!" 
                    /> 

                    <TeamCard 
                        img={member2} 
                        name="Jeny" 
                        position="Head Shef"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!" 
                    />
                    
                    <TeamCard 
                        img={member3} 
                        name="Bryan" 
                        position="Assistant Shef"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!" 
                    />

                    <TeamCard 
                        img={member4} 
                        name="Justin" 
                        position="Assistant Shef"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed tempore earum perferendis eveniet quasi. Sequi hic et aliquam aperiam!" 
                    />  
                </div>
            </div>
        </div>
    );
}
    export default OurTeam;