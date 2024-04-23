
import din from '../images/6.png';
import catering from '../images/7.png';
import delivery from '../images/8.png';
import '../css/restorent.css';
import ServiceCard from './ServiceCard';

function Services() {
  
    return (
        <section className="services-container">
                <h1 className="h-primary center">
                    Our Services
                </h1>
                
                <div id="services">
                   <ServiceCard 
                        img={din}
                        name="Dine In"
                        link="/restorent/services/menu"
                        text="Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis" 
                    />

                    <ServiceCard 
                        img={catering}
                        name="Catering Service"
                        link="/restorent/services/menu"
                        text="Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis" 
                    />

                    <ServiceCard 
                        img={delivery}
                        name="Home Delivery"
                        link="/restorent/services/menu"
                        text="Lorem ipsum dolor sit, Ipsum quaerat mollitia iure, omnis vel quia culpa similique iusto delectus quidem modi, nobis obcaecati facilis" 
                    />
                </div>
        </section>
    );
}
export default Services;