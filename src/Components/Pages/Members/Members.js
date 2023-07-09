import React, { useState } from 'react';
import axios from 'axios';

const Members = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ngo-backend-wz9s.onrender.com/api/donor/signup', {
        f_name: fName,
        l_name: lName,
        email: email,
        password: password,
        address: address
      });

      if (response.data) {
        // Signup successful
        console.log('Signup successful');
      } else {
        // Signup failed
        setError('Signup failed');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='ngo-request-section'>
      <h2>Member Signup</h2>
      {error && <p>{error}</p>}
      <div className="ngo-request-form">
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
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
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      </div>
      
    </div>
  );
};

export default Members;
