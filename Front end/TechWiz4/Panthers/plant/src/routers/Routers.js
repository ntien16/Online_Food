import { Routes,Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import Signup from '../pages/Sigup'
import FoodMain from '../pages/FoodMain'
import MenuFoodPage from "../pages/MenuFoodPage"
import ProductDetail from '../pages/ProductDetail'

function Routers(props) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to ='home'/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="foodmain" element={<FoodMain/>}/>
            <Route path="ProductDetail/:menuid" element={<ProductDetail/>}/>
            <Route path="menufoodpage" element={<MenuFoodPage/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
        </Routes>
    );
}

export default Routers;