import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

interface SignupProps {
  setIsAuthorized: (auth: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setIsAuthorized }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Clear any previous errors
    setError(null);
  
    // Ensure all fields are filled
    if (!userName || !email || !password) {
      setError('All fields are required');
      return;
    }
  
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email, password }), // Make sure this is valid JSON
      });
  
      const data = await response.json(); // This should parse the response correctly
  
      if (response.ok) {
        setIsAuthorized(true); // Change when database is implemented
        navigate('/home'); // Redirect user to homepage after successful signup
      } else {
        setError(data.error || 'Failed to create user');
        console.log({ userName, email, password }); // Ensure values are correct

      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError('Failed to create user');
      console.log({ userName, email, password }); // Ensure values are correct

    }
  };
  

  return (
    <>
      <h1 className="auth-page-title">Welcome to Campus Connect</h1>
      <div className="auth-card">
        <h1>Sign Up</h1>
        {error && <p className="error">{error}</p>}
        <div className="input-box">
          <label htmlFor="userName">Enter a username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
