import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function ProductCate(){
    const [products, setProducts] = useState([]);
    const [trademarks, setTrademarks] = useState([]);
    const [categories,setCategories] = useState([])
    const [subCategories,setSubCategories] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/getAllProducts?page=1&numberProductsOfPage=9`)
        .then(res => res.json())
        .then(products =>{
            setProducts(products.data.products);
        })

        fetch(`http://localhost:5000/trademark/getAllTrademarks`)
        .then(response => response.json())
        .then(trademarks =>{
            setTrademarks(trademarks.data)
        })

        fetch(`http://localhost:5000/category/getAllCategories`)
        .then(res => res.json())
        .then(categories =>{
            
            setCategories(categories.data);
        })
    },[])
    return(
        <>
        <div className="container" style={{marginTop: 100, marginBottom: 70}}>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5">
                    <div className="sidebar-categories">
                        <div className="head">Trademark</div>
                        <ul className="main-categories">
                            {
                                trademarks.map(trademark =>{
                                    return(
                                        <li className="main-nav-list"><a data-toggle="collapse" href="#" aria-expanded="false"><span
                                    className="lnr lnr-arrow-right"></span>{trademark.name}<span className="number"></span></a></li>
                                    )
                                })
                            }
                            

                            
                        </ul>
                    </div>
                    
                    
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7">
                    
                    <section className="lattest-product-area pb-40 category-list">
                        <div className="row">
                            {
                                products.map(product =>{
                                    return(
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src={product.image} alt=""/>
                                                <div className="product-details">
                                                    <h6>{product.name}đ</h6>
                                                    <div className="price">
                                                        <h6>{product.price}</h6>
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
                    </section>
                
                    <div className="filter-bar d-flex flex-wrap align-items-center">
                        <div className="sorting mr-auto">
                            
                        </div>
                        <div className="pagination">
                            <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                            <a href="#" className="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                            <a href="#">6</a>
                            <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCate;