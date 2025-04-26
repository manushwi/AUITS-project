import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginRegisterPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Demo credentials and local storage for users
  const demoUsers = {
    admin: { email: 'admin@demo.com', password: 'admin123', name: 'Admin User', role: 'admin' },
    customer: { email: 'user@demo.com', password: 'user123', name: 'Demo User', role: 'customer' }
  };
  
  // Get users from localStorage or use demo users as default
  const getUsers = () => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
    return demoUsers;
  };
  
  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Initialize localStorage with demo users if empty
  useEffect(() => {
    if (!localStorage.getItem('users')) {
      saveUsers(demoUsers);
    }
  }, []);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const users = getUsers();
      let userFound = false;
      let user = null;
      
      // Check user credentials based on selected role
      if (selectedRole === 'admin') {
        Object.values(users).forEach(u => {
          if (u.role === 'admin' && u.email === email && u.password === password) {
            userFound = true;
            user = u;
          }
        });
      } else if (selectedRole === 'customer') {
        Object.values(users).forEach(u => {
          if (u.role === 'customer' && u.email === email && u.password === password) {
            userFound = true;
            user = u;
          }
        });
      }
      
      if (userFound) {
        // Store user info in localStorage or context/redux state
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect based on role
        if (user.role === 'admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/Profile');
        }
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);
    
    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setIsLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      setIsLoading(false);
      return;
    }
    
    // Simulate API call delay
    setTimeout(() => {
      const users = getUsers();
      
      // Check if email already exists
      const emailExists = Object.values(users).some(user => 
        user.email.toLowerCase() === email.toLowerCase()
      );
      
      if (emailExists) {
        setErrorMessage('Email already exists. Please use a different email or login.');
        setIsLoading(false);
        return;
      }
      
      // Create new user
      const newUser = {
        email,
        password,
        name: fullName,
        role: selectedRole, // Only 'customer' for registration
        createdAt: new Date().toISOString()
      };
      
      // Add user to "database" (localStorage)
      const updatedUsers = { ...users };
      const userId = `user_${Date.now()}`;
      updatedUsers[userId] = newUser;
      saveUsers(updatedUsers);
      
      // Show success message
      setSuccessMessage('Account created successfully! You can now login.');
      
      // Reset form
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFullName('');
      setIsLoginMode(true);
      
      setIsLoading(false);
    }, 1000);
  };
  
  const toggleMode = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoginMode(!isLoginMode);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-red-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-8 text-white text-center">
          <h1 className="text-2xl font-bold">Welcome to AUITS</h1>
        </div>
        
        {/* Role Selection or Login/Register Form */}
        <div className="p-6">
          {!selectedRole ? (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-800 text-center">Choose Account Type</h2>
              
              <button
                onClick={() => setSelectedRole('admin')}
                className="w-full flex items-center bg-white hover:bg-red-50 border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 group border-l-4 border-l-red-600"
              >
                <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-medium group-hover:text-red-600">Administrator</div>
                  <div className="text-sm text-gray-500">System management & configuration</div>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedRole('customer')}
                className="w-full flex items-center bg-white hover:bg-red-50 border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 group border-l-4 border-l-red-600"
              >
                <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-medium group-hover:text-red-600">Customer</div>
                  <div className="text-sm text-gray-500">Access your account & services</div>
                </div>
              </button>

              <div className="mt-6 bg-red-50 border border-red-200 border-dashed rounded-lg p-4">
                <div className="text-red-600 text-sm font-medium text-center mb-2">Demo Credentials</div>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-16">Admin:</span>
                    <span className="text-gray-600">admin@demo.com / admin123</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-16">User:</span>
                    <span className="text-gray-600">user@demo.com / user123</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-800">
                  {selectedRole === 'admin' ? 'Administrator' : 'Customer'} {isLoginMode ? 'Login' : 'Registration'}
                </h2>
                <button 
                  onClick={() => setSelectedRole(null)}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Change Role
                </button>
              </div>
              
              {/* Toggle between login and register */}
              <div className="mb-6">
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setIsLoginMode(true)}
                    className={`w-1/2 py-2 text-center text-sm font-medium transition-colors ${
                      isLoginMode 
                        ? 'bg-red-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-red-50'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLoginMode(false)}
                    className={`w-1/2 py-2 text-center text-sm font-medium transition-colors ${
                      !isLoginMode 
                        ? 'bg-red-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-red-50'
                    }`}
                    disabled={selectedRole === 'admin'} // Disable registration for admin
                  >
                    Register
                  </button>
                </div>
                {selectedRole === 'admin' && !isLoginMode && (
                  <p className="mt-2 text-xs text-red-600">Admin registration is disabled. Please contact system administrator.</p>
                )}
              </div>
              
              {successMessage && (
                <div className="mb-6 bg-green-100 text-green-700 p-3 rounded-lg text-sm border border-green-200">
                  {successMessage}
                </div>
              )}
              
              {isLoginMode ? (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        id="email"
                        type="email"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder={selectedRole === 'admin' ? 'admin@demo.com' : 'user@demo.com'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder={selectedRole === 'admin' ? 'admin123' : 'user123'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  {errorMessage && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm border border-red-200">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 bg-white border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">
                      Forgot password?
                    </a>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Sign In'}
                  </button>
                  
                  {selectedRole === 'customer' && (
                    <div className="mt-6 text-center text-sm">
                      <span className="text-gray-600">Don't have an account? </span>
                      <button 
                        type="button"
                        onClick={toggleMode} 
                        className="font-medium text-red-600 hover:text-red-700"
                      >
                        Register here
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reg-email">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        id="reg-email"
                        type="email"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reg-password">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="reg-password"
                        type="password"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Create a password (min. 6 characters)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters long</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="confirm-password"
                        type="password"
                        className="pl-10 w-full py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  {errorMessage && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm border border-red-200">
                      {errorMessage}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                  
                  <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600">Already have an account? </span>
                    <button 
                      type="button"
                      onClick={toggleMode} 
                      className="font-medium text-red-600 hover:text-red-700"
                    >
                      Login here
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
        
        <div className="bg-red-800 py-4 px-6 text-center border-t border-red-700">
          <p className="text-xs text-white">AUITS - 2025</p>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;