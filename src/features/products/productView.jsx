import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice';

const ProductView = () => {
    const product=useSelector((state)=>(state.product) )
    console.log(product);
    
   
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(fetchProducts())
    },[dispatch])
  return (
    <div>
      <h2>List of Product titles</h2>
      {product.loading && <h2>Loading...</h2>}
      {!product.loading && product.error && <h2>{product.error}</h2>}
      {product.products}
      {product.image}
    </div>
  )
}

export default ProductView
