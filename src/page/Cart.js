import ca from '../img/cart.jpg'
import {useEffect, useState} from 'react'

function Cart(){
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart/viewCart`,{
            credentials: "same-origin"
        })
        .then(res => res.json())
        .then(cart =>{   
            console.log(cart)
        })
    },[])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/cart/deleteAllCart`,{
    //         method : 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(cart =>{   
    //         console.log(cart)
    //     })
    // },[])
    return(<section className="cart_area">
    <div className="container">
        <div className="cart_inner">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={ca} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>Minimalistic shop for multipurpose use</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>$360.00</h5>
                            </td>
                            <td>
                                <div className="product_count">
                                    <input type="text" name="qty" id="sst" maxlength="12" defaultValue="1" title="Quantity:"
                                        className="input-text qty"/>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                        className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                        className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                                </div>
                            </td>
                            <td>
                                <h5>$720.00</h5>
                            </td>
                        </tr>
                        
                        
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <h5>Subtotal</h5>
                            </td>
                            <td>
                                <h5>$2160.00</h5>
                            </td>
                        </tr>
                        
                        <tr className="out_button_area">
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <div className="checkout_btn_inner d-flex align-items-center">
                                    <a className="gray_btn" href="#">Continue Shopping</a>
                                    <a className="primary-btn" href="#">Proceed to checkout</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>)
}
export default Cart;