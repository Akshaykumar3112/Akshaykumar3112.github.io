import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import '../css/Pesto.css';
import m1 from '../images/m1.jpeg';
import m2 from '../images/m2.jpeg';
import m3 from '../images/m3.jpeg';

function Cart(){
    return(
        <>
        <Navbar/>
        <section className='cart'>
            
            <div className='row'>
               
                <div className='card-list'> 
                    <h3>Shoping Cart</h3>
                    <div className='card-item'>
                        <div className='card-image'>
                            <img src={m1} alt=""></img>
                        </div>
                        <div className='item-description'>
                            <h5>Item Name</h5>
                            <p>#fdh126</p>
                        </div>
                        <div className='card-item-add'>
                            <input type="number" className='item-input' min="1"/>
                            <p>$10.49</p>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>  
                    </div>
                    <div className='card-item'>
                        <div className='card-image'>
                            <img src={m2} alt=""></img>
                        </div>
                        <div className='item-description'>
                            <h5>Item Name</h5>
                            <p>#fdh126</p>
                        </div>
                        <div className='card-item-add'>
                            <input type="number" className='item-input' min="1"/>
                            <p>$10.49</p>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                        
                    </div>
                    <div className='card-item'>
                        <div className='card-image'>
                            <img src={m3} alt=""></img>
                        </div>
                        <div className='item-description'>
                            <h5>Item Name</h5>
                            <p>#fdh126</p>
                        </div>
                        <div className='card-item-add'>
                            
                            <input type="number" className='item-input' min="1"/>
                            <p>$10.49</p>
                            <i class="fa fa-times" aria-hidden="true"></i>  
                        </div> 
                    </div>
                    <div className='card-total'>
                        
                        
                            <span>Total</span>
                            <p>$10.49</p>
                        
                    </div>
                </div>
                <div className='card-details'>
                    <h3>Card Details</h3>
                    <div className='card'>
                        <span className='input-tag'>Name On Card</span>
                        <input type='text' className='card-input' name="cardname"/><br/>
                        <span className='input-tag'>Card number</span>
                        <input type='number' className='card-input' name="cardnumber"/><br/>
                        <span className='input-tag'>Expiry Date</span><br/>
                        <input type='month'className='date-input' name='expirydate' /><br/>
                        <span className='input-tag'>CVV</span><br/>
                        <input type='number' className='cvv-input' name="cvv"/><br/>
                        <button className='btn-ex-small'>Make Payment</button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Cart;