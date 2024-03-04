import '../css/Pesto.css';
function ContactUs() {
  
    return (
        <>
            <section id="contactus">
            </section>

            <section className="contact-container">
                <h1 className="h-primary center">
                    Contact Us
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Provident ,<br/>libero ea!consectetur adipisicing elit.Provident placeat quas doloribus totam.</p><br/>
                <div id="contact">
                    <div className="box"> 
                        <form className="contact-form" action="">
                            <h2 className="h-secondary center">
                                Send Us Query
                            </h2>
                            <input type="text"
                                className="form-tag"
                                name="name"
                                placeholder="Enter Name"/>
                                <br/><br/>
                            <input type="email" 
                                className="form-tag" 
                                name="email" 
                                placeholder="Enter Email"/>
                                <br/><br/>
                            <input type="text" 
                                className="form-tag" 
                                name="Mobile Number" 
                                placeholder="Enter Your Number"/>
                                <br/><br/>
                            <textarea name="message" 
                                placeholder="Enter Message" 
                                className="form-tag"></textarea><br/><br/>
                            <button 
                                className="btn-small" 
                                type="submit">Submit</button>
                        </form>
                    </div>
                    
                    <div className="contact-details">
                        <div className="address">
                            <div className="icon"> 
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="icon-text">
                                <h3>Address</h3>
                                <p> 4671 Sugar Camp Road,<br/> Owatonna, Minnesota,<br/> 55060 </p><br/>
                            </div>
                        </div>
                        <div className="address">
                            <div className="icon"> 
                                <i className="fa fa-phone-square"></i>
                            </div>
                            <div className="icon-text">
                                <h3>Phone</h3>
                                <p> 507-475-60945-6094 </p><br/>
                            </div>
                        </div>
                        <div className="address">
                            <div className="icon"> 
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="icon-text">
                                <h3>Email</h3>
                                <p> Wrub7d78i0e@gmail.com </p><br/>
                            </div>
                        </div> 
                    </div>            
                </div>        
            </section>
        </>
    )

}

export default ContactUs;