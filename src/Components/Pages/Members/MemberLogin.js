import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MemberLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ngo-backend-wz9s.onrender.com/api/donor/login', {
        email: email,
        password: password
      });

      if (response.data.results) {
        // Login successful, perform necessary actions (e.g., redirect to member dashboard)
        console.log('Member Logged In');
      } else {
        // Invalid credentials
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='ngo-request-section'>
      <h2>Member Login</h2>
      {error && <p>{error}</p>}
      <div className="ngo-request-form">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
      
      <a href="/donor-registration">Register</a>
    </div>
  );
};

export default MemberLogin;
