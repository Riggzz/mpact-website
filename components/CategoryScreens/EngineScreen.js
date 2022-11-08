import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'


const EngineScreen = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3000/products'

    const getEngineProducts = () => {
        axios
        .get(`${url}/engine-mods`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getEngineProducts()
    },[])


  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default EngineScreen