function Checkout(){
    return(
        <>
        <section className="checkout_area section_gap">
            <div className="container">
                
                <div className="billing_details">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Billing Details</h3>
                            <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="first" name="name"/>
                                    <span className="placeholder" data-placeholder="First name"></span>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="last" name="name"/>
                                    <span className="placeholder" data-placeholder="Last name"></span>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="company" name="company" placeholder="Company name"/>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="number" name="number"/>
                                    <span className="placeholder" data-placeholder="Phone number"></span>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="email" name="compemailany"/>
                                    <span className="placeholder" data-placeholder="Email Address"></span>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="add1" name="add1"/>
                                    <span className="placeholder" data-placeholder="Address line 01"></span>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="city" name="city"/>
                                    <span className="placeholder" data-placeholder="Town/City"></span>
                                </div>
                            
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_box">
                                <h2>Your Order</h2>
                                <ul className="list">
                                    <li><a href="#">Product <span>Total</span></a></li>
                                    <li><a href="#">Fresh Blackberry <span className="middle">x 02</span> <span className="last">$720.00</span></a></li>
                                    <li><a href="#">Fresh Tomatoes <span className="middle">x 02</span> <span className="last">$720.00</span></a></li>
                                    <li><a href="#">Fresh Brocoli <span className="middle">x 02</span> <span className="last">$720.00</span></a></li>
                                </ul>
                                <ul className="list list_2">
                                    
                                    <li><a href="#">Total <span>$2210.00</span></a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Checkout;