import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Model from './Model'
import Register from './Register'
import Login from './Login'
import { setSearchTerm } from '../redux/productSlice'

export default function Navbar() {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const openSignUp = () => {
        setIsLogin(false)
        setIsModelOpen(true)
    }
    const openLogin = () => {
        setIsLogin(true)
        setIsModelOpen(true)
    }

    const products = useSelector(state => state.cart.products)

    return (
        <nav className="bg-gradient-to-r from-blue-900 via-slate-900 to-gray-900 shadow-lg">
            <div className="mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center text-white">
                {/* Logo */}
                <div className="text-2xl font-extrabold tracking-wide text-yellow-400 hover:text-yellow-300 transition">
                    <Link to="/">E-Shop</Link>
                </div>

                {/* Search */}
                <div className="relative flex-1 mx-6">
                    <form onSubmit={handleSearch}>
                        <input
                            className="w-full bg-white/95 border border-gray-300 py-2.5 px-5 pr-12 
                 rounded-full shadow-sm placeholder-gray-500 text-gray-900 
                 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                            type="text"
                            placeholder="Search products..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch
                            className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500 
                 hover:text-yellow-500 cursor-pointer text-lg transition"
                        />
                    </form>
                </div>


                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <Link to="/cart" className="relative group">
                        <FaShoppingCart className="text-xl group-hover:text-yellow-400 transition" />
                        {products.length > 0 && (
                            <span className="absolute -top-2 left-4 text-xs w-5 h-5 bg-yellow-500 rounded-full flex justify-center items-center text-black font-bold">
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button
                        onClick={() => setIsModelOpen(true)}
                        className="hidden md:block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                    >
                        Login | Register
                    </button>
                    <button className="block md:hidden hover:text-yellow-400 transition">
                        <FaUser />
                    </button>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="flex items-center justify-center space-x-10 py-3 text-sm font-semibold text-gray-200">
                <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                <Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link>
                <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                <Link to="/" className="hover:text-yellow-400 transition">About</Link>
            </div>

            {/* Modal */}
            <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Model>
        </nav>
    )
}
