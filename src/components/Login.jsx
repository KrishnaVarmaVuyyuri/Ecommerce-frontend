import React from 'react'

export default function Login({openSignUp}) {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form >
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input placeholder='Enter Email' className='w-full px-3 py-2 border' type="email" />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Password</label>
            <input placeholder='Enter Password' className='w-full px-3 py-2 border' type="password" />
        </div>
        <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center' htmlFor=""><input className='form-checkbox' type="checkbox" />
            <span className='ml-2 text-gray-700'>Remember Me</span>
           </label>
           <a className='text-red-800' href="#">Forgot Password</a>
        </div>
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>
      </form>
      <div className='mb-4'>
        <span className='text-gray-700'>Don't have an Account?</span>
        <button className='text-red-800' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}
