import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

interface LoginProps {
  setIsAuthorized: (auth: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthorized }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthorized(true);
    navigate('/home'); // Redirects to homepage after login
  };

  return (
    <>
    <h1 className="auth-page-title">Campus Connect</h1>
    <div className="auth-card">
      <h1>Login</h1>
      <div className="input-box">
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" name="userName" />
      </div>
      <div className="input-box">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button className="auth-button login-button" onClick={handleLogin}>
        Login
      </button>
      <p className="auth-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </>
  );
};

export default Login;
