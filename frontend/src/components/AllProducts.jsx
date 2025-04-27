import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

// Direct imports for your images
import sp1 from "../assets/sp1.webp";
import sp2 from "../assets/sp2.webp";
import sp3 from "../assets/sp3.webp";
import sp4 from "../assets/sp4.webp";
import sp5 from "../assets/sp5.webp";
import sp6 from "../assets/sp6.webp";
import sp7 from "../assets/sp7.webp";
import sl1 from "../assets/sl1.webp";
import sl2 from "../assets/sl2.webp";
import inv1 from "../assets/inv1.webp";
import inv2 from "../assets/inv2.webp";

const AllProducts = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Define our new product categories
  const allProducts = React.useMemo(() => {
    // Start with existing products but update their names and prices
    const existingWithUpdates = products.map((product, idx) => ({
      ...product,
      name: product.name || `Product ${idx + 1}`,
      price: 2000 + (idx * 500),
      originalPrice: 3000 + (idx * 500),
      tags: product.tags || []
    }));

    // Add the new products with directly imported images
    return [
      ...existingWithUpdates,
      // Solar panels
      {
        id: "solar-1",
        name: "Solar Panel 100W Monocrystalline",
        image: sp1,  // Using imported image
        price: 3999,
        originalPrice: 5999,
        rating: 4.3,
        tags: ["solar", "renewable-energy"]
      },
      {
        id: "solar-2",
        name: "Premium Solar Panel 250W with Stand",
        image: sp2,  // Using imported image
        price: 8999,
        originalPrice: 12999,
        rating: 4.7,
        tags: ["solar", "hot", "renewable-energy"]
      },
      {
        id: "solar-3",
        name: "Complete Solar Panel Kit 500W with Battery",
        image: sp3,  // Using imported image
        price: 24999,
        originalPrice: 32999,
        rating: 4.8,
        tags: ["solar", "best-deals", "kit", "renewable-energy"]
      },
      // Inverters
      {
        id: "inverter-1",
        name: "Home Inverter 800VA",
        image: inv1,  // Using imported image
        price: 5499,
        originalPrice: 7499,
        rating: 4.2,
        tags: ["inverter", "power-backup"]
      },
      {
        id: "inverter-2",
        name: "Smart Inverter 1500VA with LCD Display",
        image: inv2,  // Using imported image
        price: 9899,
        originalPrice: 12999,
        rating: 4.6,
        tags: ["inverter", "hot", "smart", "power-backup"]
      },
      // Street lights
      {
        id: "street-light-1",
        name: "Solar Street Light 20W LED",
        image: sl1,  // Using imported image
        price: 2499,
        originalPrice: 3999,
        rating: 4.1,
        tags: ["street-light", "outdoor", "solar"]
      },
      {
        id: "street-light-2",
        name: "Motion Sensor Solar Street Light 40W",
        image: sl2,  // Using imported image
        price: 4999,
        originalPrice: 6999,
        rating: 4.5,
        tags: ["street-light", "hot", "outdoor", "solar"]
      }
    ];
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    try {
      // Start with all products
      let result = [...allProducts];
      
      // Apply search filter if there's a search term
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        result = result.filter((product) => {
          const nameMatch = product.name.toLowerCase().includes(searchLower);
          const tagMatch = product.tags.some(tag => tag.toLowerCase().includes(searchLower));
          return nameMatch || tagMatch;
        });
      }
      
      // Apply sorting
      if (sortOrder === "lowToHigh") {
        result = [...result].sort((a, b) => a.price - b.price);
      } else if (sortOrder === "highToLow") {
        result = [...result].sort((a, b) => b.price - a.price);
      } else {
        // Default order: special products first
        result = [...result].sort((a, b) => {
          const aIsSpecial = a.tags.some(tag => tag === "hot" || tag === "best-deals");
          const bIsSpecial = b.tags.some(tag => tag === "hot" || tag === "best-deals");
          
          if (aIsSpecial && !bIsSpecial) return -1;
          if (!aIsSpecial && bIsSpecial) return 1;
          return 0;
        });
      }
      
      setFilteredProducts(result);
    } catch (error) {
      console.error("Error filtering products:", error);
      setFilteredProducts(allProducts); // Fallback to all products
    }
  }, [allProducts, searchTerm, sortOrder]);
  
  const handleSearch = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="bg-gray-300 py-8 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">
          All Products
        </h1>
        
        {/* Search Box */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search products by name or tag..."
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
          
          {/* Price Sorting */}
          <div className="mt-4 flex justify-end">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded bg-white"
            >
              <option value="default">Featured</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4 bg-gray-50"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {product.tags.includes("hot") && (
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">
                      HOT
                    </span>
                  )}
                  {product.tags.includes("best-deals") && (
                    <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
                      BEST DEALS
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-gray-700 font-semibold text-base leading-snug mb-1">
                  {product.name}
                </h2>
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
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
                    {"★★★★★"}
                    <span className="text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    onClick={() => navigate(`/cart?productId=${product.id}`)}
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