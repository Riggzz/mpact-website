import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'


const AccessoriesScreen = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3000/products'

    const getAccessories = () => {
        axios
        .get(`${url}/accessories`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getAccessories()
    },[])

  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default AccessoriesScreen