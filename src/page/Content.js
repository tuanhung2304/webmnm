import {Routes,Route} from 'react-router-dom'
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';
import Information from './Information';
import Login from './Login';
import Product from './Product';
import ProductCate from './ProductCate';
import ProductDetail from './ProductDetail';
import Sign from './Sign';
function Content(){
    return(
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/home' exact element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/infor' element={<Information/>}/>
            <Route path='/sign' element={<Sign/>}/>
            <Route path='/productcategory' element={<ProductCate/>}/>
            <Route path='/productdetail/:id' element={<ProductDetail />}/>
        </Routes>
    )
}
export default Content;