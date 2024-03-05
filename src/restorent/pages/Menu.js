import '../css/Pesto.css';
import item1 from '../images/m1.jpeg';
import item2 from '../images/m2.jpeg';
import item3 from '../images/m3.jpeg';
import item4 from '../images/m4.jpeg';
import item5 from '../images/m6.jpeg';


function Menu(){
    return(
        <>
        <div className='manu-banner'>
        </div>

        <section className='menu-section'>
            <div className='container'>
                <div className='row'>
                    <div className='title'>
                        <h1 className='h-primary'>Menu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Provident placeat quas doloribus totam, libero ea!</p>
                    </div>
                </div>
                <div className='menu-card'>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item1} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item5} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item2} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item3} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item4} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    
                </div>
                <div className='menu-card'>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item1} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item5} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item2} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item3} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='dish-image'>
                            <img src={item4} alt=""/>
                        </div>
                        <div className='content'>
                            <h3 className='h-secondary'>Dish Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className='btn-small' name="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
        </>
    );
}
export default Menu;