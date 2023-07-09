import React, { useState } from 'react';
import axios from 'axios';
import './NGOrequest.css';

const AddNGOForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleAddNGO = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://ngo-backend-wz9s.onrender.com/api/ngo/add-ngo', {
        name: name,
        username: username,
        password: password,
        address: address
      });

      alert('NGO added successfully');
      // Reset form values if needed
    } catch (error) {
      alert('Error adding NGO:', error);
      // Handle error if necessary
    }
  };

  return (
    <div className='ngo-request-section'>
      <h2>Add NGO</h2>
      <form onSubmit={handleAddNGO}>
        <div className='ngo-request-form'>
          <label htmlFor="name">Name:</label>
          <input
            type="number"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Add NGO</button>
      </form>
    </div>
  );
};

export default AddNGOForm;
