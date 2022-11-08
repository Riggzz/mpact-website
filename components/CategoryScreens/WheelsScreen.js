import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'

const WheelsScreen = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3000/products'
  
    const getWheels = () => {
        axios
        .get(`${url}/wheels`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }
  
    useEffect(() => {
        getWheels()
    },[])
  
  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default WheelsScreen