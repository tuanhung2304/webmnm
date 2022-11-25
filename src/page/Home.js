import {dangnhap, getCookie} from '../js/main.js'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home(){
    const token = getCookie("tokenuser")
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/getAllProducts?page=1&numberProductsOfPage=8`)
        .then(res => res.json())
        .then(products =>{
            setProducts(products.data.products);
        }) 
    },[])
    return(
        <>
        <section className="banner-area">
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">
                        <div className="active-banner-slider owl-carousel">
                            
                            
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-content">
                                        <h1>Đồng hồ đẹp<br/>Giá cực sốc!</h1>
                                        <p>Tới ngay với cửa hàng của chúng tôi, nơi sẽ đáp ứng được mọi nhu cầu mua sắm 1 chiếc đồng hồ của các bạn</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src="img/banner/banner-img.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="features-area section_gap">
    <div className="container">
        <div className="row features-inner">
            
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                    <div className="f-icon">
                        <img src="img/features/f-icon1.png" alt=""/>
                    </div>
                    <h6>Free Delivery</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
           
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                    <div className="f-icon">
                        <img src="img/features/f-icon2.png" alt=""/>
                    </div>
                    <h6>Return Policy</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                    <div className="f-icon">
                        <img src="img/features/f-icon3.png" alt=""/>
                    </div>
                    <h6>24/7 Support</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
          
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                    <div className="f-icon">
                        <img src="img/features/f-icon4.png" alt=""/>
                    </div>
                    <h6>Secure Payment</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="owl-carousel active-product-area section_gap">
   
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
                <div className="section-title">
                    <h1>Latest Products</h1>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="single-product-slider">
        <div className="container">
            <div className="row">
               {
                products.map(product =>{
                    return(
                        <div className="col-lg-3 col-md-6">
                    <div className="single-product">
                        <img className="img-fluid" src={product.image} alt=""/>
                        <div className="product-details">
                            <h6>{product.name}</h6>
                            <div className="price">
                                <h6>{product.price} đ</h6>    
                            </div>
                            <div className="prd-bottom">
                                <Link to={`/productdetail/${product._id}`} className="social-info">
                                    <span className="lnr lnr-move"></span>
                                    <p className="hover-text">view more</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
               }
                
                
            </div>
        </div>
    </div>
    
</section>
        </>
        
    )
}
export default Home;