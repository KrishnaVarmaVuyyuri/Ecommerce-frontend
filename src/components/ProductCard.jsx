import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

export default function ProductCard({product}) {
  const dispatch = useDispatch()
  const handleAddToCart = (e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product added Successfully!")
  }
  return (
    <div className='bg-white p-4 shadow rounded relative border
    trnasform transition-transform duration-300 hover-scale-105'>
      <img className='w-full h-48 object-contain mb-4' src={product.image} alt={product.name}/>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      </div>
      <div onClick={(e)=>handleAddToCart(e,product)} className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100'>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>
            Add to Cart
        </span>
      </div>
    </div>
  )
}
