import React from 'react'

export default function Register({openLogin}) {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form >
        <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input placeholder='Enter Name' className='w-full px-3 py-2 border' type="email" />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Password</label>
            <input placeholder='Enter Password' className='w-full px-3 py-2 border' type="password" />
        </div>
       
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
      </form>
      <div className='mb-4'>
        <span className='text-gray-700'>Already have an Account?</span>
        <button className='text-red-800' onClick={openLogin}>Login in</button>
      </div>
    </div>
  )
}
