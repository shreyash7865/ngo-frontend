import React, { useState } from 'react';
import axios from 'axios';

const NGOSignup = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id,
      name,
      username,
      password,
      address,
    };

    axios.post('https://ngo-backend-wz9s.onrender.com/api/ngo/add-ngo', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NGOSignup;
