import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/page';
import AddEventPage from './components/AddEventsPage/page';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UnauthorizedPage from './components/UnauthorizedPage/Page';
import ProfilePage from './components/ProfilePage/page';
import './App.css';

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  return (
    <Router>
      <AppRoutes isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
    </Router>
  );
};

const AppRoutes: React.FC<{ isAuthorized: boolean, setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isAuthorized, setIsAuthorized }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function to handle state change and redirection
  const logout = () => {
    setIsAuthorized(false);  // Update authorization state
    navigate('/');  // Redirect to the home/login page
  };

  return (
    <>
      {/* Show Header only when authorized and not on profile page */}
      {isAuthorized && location.pathname !== '/profile' && (
        <Header setIsAuthorized={setIsAuthorized} isAuthorized={isAuthorized} logout={logout} />
      )}

      <Routes>
        <Route
          path="/"
          element={isAuthorized ? <Navigate to="/home" /> : <UnauthorizedPage />}
        />
        <Route
          path="/login"
          element={<Login setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/home"
          element={isAuthorized ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/add-event"
          element={isAuthorized ? <AddEventPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={isAuthorized ? <ProfilePage setIsAuthorized={setIsAuthorized} /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
