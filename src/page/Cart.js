import {getCookie} from '../js/main.js'
import {useEffect, useState} from 'react'
import trashcan from '../img/trash-can-solid.svg'
import {Link} from 'react-router-dom'
import $, { get } from 'jquery'
function Cart(){
    const [cart, setCart] = useState([]);
    const tokenuser = getCookie('tokenidUser')
    useEffect(() => {
        $.ajax({
            url: "http://localhost:5000/cart/viewCart",
            method: "GET",
            credentials: "include",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            async: true,
            success: function (data) {
                setCart(data.data.items)
            },
            error: (data) => {
                console.log(data.responseText);
            }})
    },[])
    const oncart = (e)=>{
        if(tokenuser == " " || tokenuser == undefined){
            alert("Bạn cần phải đăng nhập trước khi chuyển sang bước tiếp theo")
            window.location.href="http://localhost:3000/login";
        }
        else{
            window.location.href="http://localhost:3000/checkout";
        }
    }
    
    let total = 0;
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
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(index=>{
                                let stotal = index.amount*index.product.price;
                                total = total + stotal;
                                return(
                                    
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src={index.product.image} alt="" width={100} height={100}/>
                                                </div>
                                                <div className="media-body">
                                                    <p>{index.product.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{index.product.price}đ</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input type="text" name="qty" id="sst" maxlength="12" defaultValue={index.amount} title="Quantity:"
                                                    className="input-text qty"/>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{stotal}đ</h5>
                                        </td>
                                        <td ><img src={trashcan} width={30} height={30}  /></td>
                                    </tr>
                                )
                            })
                        }
                        
                        
                        
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <h5>Total</h5>
                            </td>
                            <td>
                                <h5>{total}đ</h5>
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
                                    <a className="primary-btn" onClick={oncart}>Proceed to checkout</a>
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