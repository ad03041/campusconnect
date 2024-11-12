import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './campusConnectLogo.webp'; 
import './Header.css';

interface HeaderProps {
  setIsAuthorized: (auth: boolean) => void;
  isAuthorized: boolean;
  logout: () => void;  // Ensure logout is received as a prop
}

const Header: React.FC<HeaderProps> = ({ setIsAuthorized, isAuthorized, logout }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');  // Navigate to the profile page
  };

  return (
    <div className="header">
      {/* Show profile button if authorized */}
      {isAuthorized && (
        <button className="profile-button" onClick={goToProfile}>Profile</button>
      )}
      <h1 className="header-title">
      <img src={logo} alt="Campus Connect Logo" className="header-logo" />
        {isAuthorized ? (
          <Link to="/home">Campus Connect</Link>  
        ) : (
          'Campus Connect'
        )}
      </h1>
      {/* Show logout button only if authorized */}
      {isAuthorized && (
        <button className="logout-button" onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Header;