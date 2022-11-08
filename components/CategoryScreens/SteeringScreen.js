import React from 'react'
import { useEffect, useState } from 'react'
import CartCard from '../CartCard'
import axios from 'axios'

const SteeringScreen = () => {
  const [products, setProducts] = useState([])
  const url = 'http://localhost:3000/products'

  const getSteeringProducts = () => {
      axios
      .get(`${url}/steering-mods`)
      .then((res) => {
          setProducts(res.data)
          console.log(res.data)
      })
  }

  useEffect(() => {
      getSteeringProducts()
  },[])

  return (
    <div>
    {products.map(product => <CartCard product={product}/>)}
    </div>
  )
}

export default SteeringScreen