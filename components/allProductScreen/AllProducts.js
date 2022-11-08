import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CartCard from '../CartCard'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const url = 'http://localhost:3000'

    const getProducts = () => {
        axios
        .get(`${url}/all-products`)
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div>
        {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default AllProducts