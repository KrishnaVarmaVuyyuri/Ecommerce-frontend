import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function Checkout({setOrder}) {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(true)
    const [paymentToggle, setPaymentToggle] = useState(true)

    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [shippingInfo, setShippingInfo] = useState(
        {
            address:'',
            city:'',
            zip:''
        }
    )
    const navigate = useNavigate()
    const handleOrder = ()=>{
        const newOrder = {
            products: cart.products,
            orderNumber:'1223',
            shippingInformation :shippingInfo,
            totalPrice :cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }
    const cart = useSelector(state => state.cart)
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='border p-2 mb-6'>
                        <div onClick={() => setBillingToggle(!billingToggle)} className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div className='block text-gray-700'>
                                <label >Name</label>
                                <input name='name' placeholder='Enter Name' className='w-full px-3 py-2 border' type='text' />
                            </div>
                            <div className='block text-gray-700'>
                                <label >Email</label>
                                <input name='email' placeholder='Enter Email' className='w-full px-3 py-2 border' type='email' />
                            </div>
                            <div className='block text-gray-700'>
                                <label>Phone</label>
                                <input name='phone' placeholder='Enter Phone Number' className='w-full px-3 py-2 border' type='text' />
                            </div>
                        </div>

                    </div>
                    <div className='border p-2 mb-6'>
                        <div onClick={() => setShippingToggle(!shippingToggle)} className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div className='block text-gray-700'>
                                <label >Address</label>
                                <input onChange={(e)=>setShippingInfo({...shippingInfo,address:e.target.value})} name='address' placeholder='Enter Address' className='w-full px-3 py-2 border' type='text' />
                            </div>
                            <div className='block text-gray-700'>
                                <label >City</label>
                                <input onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})} name='city' placeholder='Enter City' className='w-full px-3 py-2 border' type='email' />
                            </div>
                            <div className='block text-gray-700'>
                                <label >Zip Code</label>
                                <input onChange={(e)=>setShippingInfo({...shippingInfo,zip:e.target.value})} name='zip' placeholder='Enter Zip Code' className='w-full px-3 py-2 border' type='text' />
                            </div>
                        </div>

                    </div>
                    <div className='border p-2 mb-6'>
                        <div onClick={() => setPaymentToggle(!paymentToggle)} className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold mb-2'>Payment</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input onChange={() => setPaymentMethod("cod")} checked={paymentMethod === "cod"} name='payment' type='radio' />
                                <label className='block text-gray-700 ml-2'>Cash on delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input onChange={() => setPaymentMethod("dc")} checked={paymentMethod === "dc"} name='payment' type='radio' />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input onChange={() => setPaymentMethod("upi")} checked={paymentMethod === "upi"} name='payment' type='radio' />
                                <label className='block text-gray-700 ml-2'>UPI</label>
                            </div>
                            {paymentMethod === 'dc' && (
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Debit Card Information</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Card Number</label>
                                            <input
                                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="text"
                                                placeholder="Enter Debit Card Number"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Card Holder Name</label>
                                            <input
                                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="text"
                                                placeholder="Enter Debit Card Holder Name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Expire Date</label>
                                            <input
                                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="text"
                                                placeholder="MM/YY"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">CVV</label>
                                            <input
                                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                type="password"
                                                placeholder="Enter CVV"
                                            />
                                        </div>
                                    </div>
                                </div>

                            )}
                            {paymentMethod === 'upi' && (
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-800">UPI Payment</h3>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-1">UPI ID</label>
                                        <input
                                            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            type="text"
                                            placeholder="Enter UPI ID (e.g., user@upi)"
                                        />
                                    </div>


                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>
                        Order Summary
                    </h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img className='w-16 h-16 object-contain rounded' src={product.image} alt={product.name}/>
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>
                                            ${product.price} x {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>${product.price * product.quantity}</div>
                                </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <button onClick={()=>handleOrder()} className='w-full bg-blue-600 text-white py-2 mt-6 hover:bg-red-800'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};
