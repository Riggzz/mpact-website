import React from 'react'
import axios from 'axios'

const ProductCart = ({product}) => {
    const handleClick = () => {
        axios
        .post(`http://localhost:3000/cart`, {id:product.id})
        .then((res) => {
            console.log("success")
        })
    }
  return (
    <div className='product-card'>
        <img>{product.product_img}</img>
        <div>
            <h4>{product.product_name}</h4>
            <h4>{product.product_price}</h4>
            <p>{product.product_description}</p>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCart