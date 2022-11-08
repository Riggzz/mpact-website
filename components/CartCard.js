import React from 'react'

const CartCard = ({product}) => {
  return (
    <div className='cart-card'>
        <img>{product.product_img}</img>
        <div>
        <h4>{product.product_name}</h4>
        <h4>{product.price}</h4>
        </div>
    </div>
  )
}

export default CartCard