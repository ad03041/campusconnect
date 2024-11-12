import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

interface SignupProps {
  setIsAuthorized: (auth: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setIsAuthorized }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    setIsAuthorized(true); //Change when we implment database
    navigate('/home'); // Redirect user to homepage after they signup
  };

  return (
    <>
    <h1 className="auth-page-title">Welcome to Campus Connect</h1>
    <div className="auth-card">
      <h1>Sign Up</h1>
      <div className="input-box">
        <label htmlFor="userName">Enter a username:</label>
        <input type="text" id="userName" name="userName" />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="input-box">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button className="auth-button signup-button" onClick={handleSignup}>
        Sign Up
      </button>
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </>
  );
};

export default Signup;
