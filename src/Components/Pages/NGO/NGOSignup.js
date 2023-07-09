import React, { useState } from 'react';
import axios from 'axios';
import './NGOrequest.css'

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
      <form onSubmit={handleAddNGO} method='post'>
                <input type="text" required  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter NGO Name' /><br />
                <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='NGO Username' />  <br />
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' /> <br />
                <input type="address" required value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address' /> <br />

                <button type='submit'>Request</button>
            </form>
    </div>
  );
};

export default AddNGOForm;
