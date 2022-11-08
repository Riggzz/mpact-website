import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'

const SuspensionScreen = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3000/products'
  
    const getSuspensionProducts = () => {
        axios
        .get(`${url}/suspension-mods`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }
  
    useEffect(() => {
        getSuspensionProducts()
    },[])
  
  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default SuspensionScreen