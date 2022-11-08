import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'

const BrakingScreen = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3000/products'

    const getBrakeProducts = () => {
        axios
        .get(`${url}/brake-mods`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getBrakeProducts()
    },[])

  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default BrakingScreen