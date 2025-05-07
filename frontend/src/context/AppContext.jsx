import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [referralHistory, setReferralHistory] = useState([]);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setPoints(parsedUser.points || 0);
      setReferralCode(parsedUser.referralCode || '');
      setReferralHistory(parsedUser.referralHistory || []);
    }
  }, []);

  // Generate a unique referral code
  const generateReferralCode = (userId) => {
    const code = `AUITS-${userId.slice(0, 5).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;
    setReferralCode(code);
    
    // Update user in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      storedUser.referralCode = code;
      localStorage.setItem('user', JSON.stringify(storedUser));
    }
    
    return code;
  };

  // Add points to user
  const addPoints = (amount) => {
    setPoints(prev => {
      const newPoints = prev + amount;
      // Update localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        storedUser.points = newPoints;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      return newPoints;
    });
  };

  // Handle referral - both referrer and referee get points
  const handleReferral = (code) => {
    // In a real app, you would send this to your backend for verification
    console.log(`Referral code used: ${code}`);
    
    // For demo purposes, we'll just add points
    addPoints(100); // 100 points for referring someone
    
    // Add to referral history
    setReferralHistory(prev => {
      const newHistory = [...prev, {
        code,
        date: new Date().toISOString(),
        pointsEarned: 100
      }];
      
      // Update localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        storedUser.referralHistory = newHistory;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      
      return newHistory;
    });
  };

  // Award points after purchase
  const awardPurchasePoints = (amountSpent) => {
    const pointsEarned = Math.floor(amountSpent / 10); // 1 point per ₹10 spent
    addPoints(pointsEarned);
    return pointsEarned;
  };

  // Redeem points for discount
  const redeemPoints = (pointsToRedeem) => {
    if (pointsToRedeem > points) {
      throw new Error('Not enough points');
    }
    
    setPoints(prev => {
      const newPoints = prev - pointsToRedeem;
      // Update localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        storedUser.points = newPoints;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      return newPoints;
    });
    
    return pointsToRedeem; // Each point equals ₹1 discount
  };

  // Set user after login/registration
  const setUserData = (userData) => {
    const userWithPoints = {
      ...userData,
      points: userData.points || 100, // Default 100 points for new users
      referralCode: userData.referralCode || generateReferralCode(userData.id || Date.now().toString()),
      referralHistory: userData.referralHistory || []
    };
    
    setUser(userWithPoints);
    setPoints(userWithPoints.points);
    setReferralCode(userWithPoints.referralCode);
    setReferralHistory(userWithPoints.referralHistory);
    localStorage.setItem('user', JSON.stringify(userWithPoints));
  };

  // Logout
  const logout = () => {
    setUser(null);
    setPoints(0);
    setReferralCode('');
    setReferralHistory([]);
    localStorage.removeItem('user');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        points,
        referralCode,
        referralHistory,
        setUser: setUserData,
        generateReferralCode,
        handleReferral,
        addPoints,
        awardPurchasePoints,
        redeemPoints,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);