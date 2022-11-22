import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getCookie} from '../js/main.js'
function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [trademarks, setTrademarks] = useState([])
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/getProductById/${id}`)
        .then(res => res.json())
        .then(product =>{
            setProduct(product.data);
            setTrademarks(product.data.trademark);
            setCategories(product.data.subCategory)
        })

    },[])
    const handleAddToCart =(e) =>{
        const amount = document.getElementById("amount").value;
        const data = {
            idProduct: product._id,
            amount: amount
        }
        console.log(data)
        fetch('http://localhost:5000/cart/addToCart', {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }).then(response => response.json())
        .then(muopden =>{
            console.log(muopden)
        })
    }
    return(
        <>
        <div className="product_image_area">
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={product.image} alt=""/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>{product.name}</h3>
                            <h2>{product.price}đ</h2>
                            <ul className="list">
                                <li><h4>Category</h4></li>
                                {
                                    categories.map(category =>{
                                        return(
                                            <li><span>{category.name}</span></li>
                                        )
                                    })
                                }
                                <li></li>
                            </ul>
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                during the winter.</p>
                            <div className="product_count">
                                <label for="qty">Quantity:</label>
                                <input type="text" defaultValue="1" id='amount'/>
                                
                            </div>
                            <div className="card_area d-flex align-items-center" onClick={handleAddToCart}>
                                <a className="primary-btn" >Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductDetail;