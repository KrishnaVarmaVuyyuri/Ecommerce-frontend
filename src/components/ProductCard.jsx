import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added Successfully!");
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 group">

  {/* Product Image */}
  {product.image && (
    <div className="mb-4 rounded-lg overflow-hidden bg-gray-50/50">
      <img
        className="w-full h-48 object-contain p-3"
        src={product.image}
        alt={product.name}
      />
    </div>
  )}

  {/* Product Info */}
  <div className="space-y-2">
    <h3 className="text-lg font-medium text-gray-900 leading-snug">
      {product.name}
    </h3>
    
    <p className="text-xl font-semibold text-gray-900">
      ₹{product.price}
    </p>

    {/* Description */}
    {product.description && (
      <p className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </p>
    )}

    {/* Simple stars */}
    <div className="flex items-center text-amber-400 text-sm">
      <FaStar /><FaStar /><FaStar /><FaStar />
      <FaStar className="text-gray-300" />
      <span className="text-gray-400 ml-2 text-xs">(4.0)</span>
    </div>
  </div>

  {/* Add to Cart Button */}
  <button
    onClick={(e) => handleAddToCart(e, product)}
    className="mt-4 w-full bg-gray-900 hover:bg-black text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
  >
    Add to Cart
  </button>

</div>
  );
}
