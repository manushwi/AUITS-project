// pages/Payment.jsx
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Replace with your Stripe publishable key when you get one
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CheckoutForm = ({ totalAmount, items, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const cardElement = elements.getElement(CardElement);
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      // Simulate a successful payment
      setTimeout(() => {
        setLoading(false);
        onSuccess({
          id: paymentMethod.id,
          amount: totalAmount,
          items: items,
          last4: paymentMethod.card.last4,
          timestamp: new Date().toISOString(),
        });
      }, 1500);
      
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Details
          </label>
          <div className="p-3 border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!stripe || loading}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Pay ₹${totalAmount?.toLocaleString() || '0'}`
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState('summary'); // 'summary', 'payment', 'success'
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentResult, setPaymentResult] = useState(null);
  
  useEffect(() => {
    // Check if cart data was passed through location state
    if (location.state && location.state.cartItems) {
      setCartItems(location.state.cartItems);
      setTotalAmount(location.state.totalAmount);
    } else {
      // If not coming from cart, load from localStorage
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const items = JSON.parse(savedCart);
        setCartItems(items);
        const total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setTotalAmount(total);
      }
    }
  }, [location]);

  const handleProceedToPayment = () => {
    setPaymentStep('payment');
  };

  const handlePaymentSuccess = (result) => {
    setPaymentResult(result);
    setPaymentStep('success');
    
    // Clear the cart after successful payment
    localStorage.removeItem("cart");
  };

  const handleCancel = () => {
    if (location.state && location.state.returnPath) {
      navigate(location.state.returnPath);
    } else {
      navigate("/cart");
    }
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Checkout
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Secure payment processing for your order
          </p>
        </div>

        {cartItems.length === 0 && paymentStep !== 'success' ? (
          <div className="bg-white shadow rounded-lg overflow-hidden p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">There are no items in your cart to checkout.</p>
            <button
              onClick={() => navigate("/products")}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {paymentStep === 'summary' && (
              <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div className="flex-grow">
                          <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                          <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-500">Subtotal</span>
                      <span className="font-medium text-gray-900">₹{totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-500">Shipping</span>
                      <span className="font-medium text-gray-900">Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      onClick={handleProceedToPayment}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Proceed to Payment
                    </button>
                    <button
                      onClick={handleCancel}
                      className="w-full mt-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Return to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}

            {paymentStep === 'payment' && (
              <div>
                <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Payment Details
                    </h3>
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>Total Amount:</span>
                      <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    totalAmount={totalAmount}
                    items={cartItems}
                    onSuccess={handlePaymentSuccess}
                    onCancel={() => setPaymentStep('summary')}
                  />
                </Elements>
              </div>
            )}

            {paymentStep === 'success' && paymentResult && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    Payment Successful!
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Your order has been placed successfully.
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-md text-left mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Order ID</span>
                        <span className="text-gray-900 font-mono">{paymentResult.id.substring(0, 12)}...</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Amount Paid</span>
                        <span className="text-gray-900 font-bold">₹{paymentResult.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Payment Method</span>
                        <span className="text-gray-900">**** **** **** {paymentResult.last4}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date</span>
                        <span className="text-gray-900">{new Date(paymentResult.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleContinueShopping}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;