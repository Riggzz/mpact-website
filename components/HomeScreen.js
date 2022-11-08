import React from 'react'
import { Link } from "react-router-dom";
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div>
    <div className='all-products-card'>
        <img className='evo-seat' src='https://www.sparcousa.com/content/images/thumbs/0001697_evo-qrt_550.jpeg'/>
        <h3 className='all-products-text'>ALL PRODUCTS</h3>
        <Link to='all-products'>
        <button className="shop-btn">Shop</button>
        </Link>
    </div>
    <div className='new-product-card'>
        <img className='wheel' src='https://cdn.shopify.com/s/files/1/0055/0456/5341/products/361--te37SL9522.jpg?v=1556015452'/>
        <h3 className='upcoming-text'>TE37 WHEEL DROPS NOVEMBER 20TH 8AM EST</h3>
        <Link to="upcoming">
        <button className='learn-btn'>Learn More</button>  
        </Link>
    </div>
    </div>
  )
}
export default HomeScreen