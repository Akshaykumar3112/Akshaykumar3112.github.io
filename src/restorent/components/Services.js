import din from '../images/6.png';
import catering from '../images/7.png';
import delivery from '../images/8.png';
import '../css/Pesto.css';
function Services() {
  
    return (
        <section className="services-container">
                <h1 className="h-primary center">
                    Our Services
                </h1>
                
                <div id="services">
                    <div className="box">
                        <img src={din} alt=""/>
                        <h2 className="h-secondary center">
                            Din In
                        </h2>
                        <p className="center">Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis</p>
                    </div>
                    <div className="box">
                        <img src={catering} alt=""/>
                        <h2 className="h-secondary center">
                            Catering Service
                        </h2>
                        <p className="center">Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis</p>
                    </div>
                    <div className="box">
                        <img src={delivery} alt=""/>
                        <h2 className="h-secondary center">
                            Home Delivery
                        </h2>
                        <p className="center">Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis</p>
                    </div>
                </div>
        </section>
    );
}
export default Services;