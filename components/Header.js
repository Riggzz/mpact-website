import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
<header>
    <Link to="">
    <button className="logo">MPACT RACING</button>  
    </Link>   
  <nav className="nav-bar">
    <Link to="products">
      <button className="nav-btn">PRODUCTS</button>
    </Link>
    <Link to="upcoming">
      <button className="nav-btn">UPCOMING</button>
    </Link>
    <Link to="contact">
      <button className="nav-btn">CONTACT</button>
    </Link>
  </nav>
    <Link to="cart">
  <button className="cart"><FaShoppingCart size={30}/></button>
    </Link>
    <Link to="auth">
  <button className="login-signup">Login or Sign Up</button>
    </Link>
</header>
    )
}

export default Header