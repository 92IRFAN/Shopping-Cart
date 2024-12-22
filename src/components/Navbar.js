import React from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import useShop from "../Context/ShopContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { products } = useShop();

  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=> navigate('/')}>
                My Shopping
            </span>
            <div className="cart" onClick={()=> navigate('/cart')}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{products.length}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar