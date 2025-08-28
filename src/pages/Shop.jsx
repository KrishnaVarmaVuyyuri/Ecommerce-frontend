import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { API } from "../api";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/") // your Django endpoint: /api/products/
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}
