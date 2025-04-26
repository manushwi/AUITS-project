import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're coming from a product page with a product ID
    const params = new URLSearchParams(location.search);
    const productId = params.get("productId");
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    const initialCart = savedCart ? JSON.parse(savedCart) : [];
    
    // If we have a productId in the URL, add it to cart if not already there
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId) || p.id === productId);
      
      if (product) {
        const existingItemIndex = initialCart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex >= 0) {
          // Product already in cart, increase quantity
          initialCart[existingItemIndex].quantity += 1;
        } else {
          // Add new product to cart
          initialCart.push({
            ...product,
            quantity: 1
          });
        }
        
        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(initialCart));
      }
    }
    
    setCartItems(initialCart);
  }, [location]);

  useEffect(() => {
    // Calculate total amount whenever cart items change
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const proceedToCheckout = () => {
    // Navigate to checkout page or show payment modal
    // For now, we'll just show an alert
    alert("Proceeding to checkout!");
    // navigate("/checkout");
  };

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            <h2 className="text-xl text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={() => navigate("/products")}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row p-4 gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-contain bg-gray-50 rounded"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center space-x-2 my-1">
                      <span className="text-red-500 font-bold">₹{item.price.toLocaleString()}</span>
                      <span className="line-through text-sm text-gray-400">
                        ₹{item.originalPrice?.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-green-600 text-sm font-medium">
                          {Math.round(100 - (item.price / item.originalPrice) * 100)}% off
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center mt-3 justify-between">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right font-semibold">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cart Summary */}
            <div className="bg-gray-50 p-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between mb-6 pt-2 border-t border-gray-200 text-lg font-bold">
                <span>Total:</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <button 
                  onClick={clearCart}
                  className="px-5 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  Clear Cart
                </button>
                <button 
                  onClick={proceedToCheckout}
                  className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;