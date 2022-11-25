import {useEffect, useState} from 'react'
import $ from 'jquery'
import {getCookie} from '../js/main.js'
function Checkout(){
    const [cart, setCart] = useState([]);
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
    let total = 0;
    const idUser = getCookie('tokenidUser')
    const tokenuser = getCookie('tokenuser')
    const CreateBill = (e) =>{
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const address = document.getElementById('add1').value
        const note = document.getElementById('note').value
        let arr = [];
        cart.map(index =>{
            let obj = {
                idProduct : index.idProduct,
                amount : index.amount
            }
            arr.push(obj);
        })
        const data = {
            idUser : idUser,
            name : name,
            address : address,
            phone : phone,
            detailBill: arr,
            note : note
        }
        console.log(data)
        fetch('http://localhost:5000/bill/createBill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenuser
        },
        body: JSON.stringify(data),
        }).then(response => response.json())
        .then(muopden =>{
            console.log(muopden)
        })
        $.ajax({
            url: "http://localhost:5000/cart/deleteAllCart",
            method: "DELETE",
            credentials: "include",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            async: true,
            success: function (data) {
                console.log(data)
            },
            error: (data) => {
                console.log(data.responseText);
            }})
        
    }
    return(
        <>
        <section className="checkout_area section_gap">
            <div className="container">
                
                <div className="billing_details">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Billing Details</h3>
                            <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Name"/>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number"/>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="add1" name="add1" placeholder="Address"/>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="note" name="note" placeholder="Note"/>
                            </div>
                                <a class="primary-btn" onClick={CreateBill}>Order</a>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_box">
                                <h2>Your Order</h2>
                                <ul className="list">
                                    <li><a href="#">Product <span>Total</span></a></li>
                                    {
                                        cart.map(index =>{
                                            let stotal = index.amount*index.product.price;
                                            total = total + stotal;
                                            return(
                                                <li><a >{index.product.name}<span className="middle">x {index.amount}</span> <span className="last">{stotal}</span></a></li>
                                            )
                                        })
                                    }
                                   
                                </ul>
                                <ul className="list list_2">
                                    
                                    <li><a href="#">Total <span>{total}</span></a></li>
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