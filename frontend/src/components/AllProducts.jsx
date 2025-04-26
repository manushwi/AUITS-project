import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 py-8 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden  hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain p-4 bg-gray-50"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500 font-medium mb-1">
                  {product.tags.includes("hot") && (
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs mr-1">
                      HOT
                    </span>
                  )}
                  {product.tags.includes("best-deals") && (
                    <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
                      BEST DEALS
                    </span>
                  )}
                </div>
                <h2 className="text-gray-700 font-semibold text-base leading-snug">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-2 my-2">
                  <span className="text-red-500 font-bold">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="line-through text-sm text-gray-400">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    {Math.round(
                      100 - (product.price / product.originalPrice) * 100
                    )}% off
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-yellow-500 text-sm">
                    {'★'.repeat(5)}
                    <span className="text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/cart?productId=${product.id}`);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;