import React, { useState } from 'react';

const Members = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSignUp = () => {
    // Make a POST request to your backend endpoint for sign up
    fetch('https://ngo-backend-wz9s.onrender.com/api/donor/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        f_name: fName,
        l_name: lName,
        email: email,
        password: password,
        address: address,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        // Reset the form
        setFName('');
        setLName('');
        setEmail('');
        setPassword('');
        setAddress('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='ngo-request-section'>
      <h2>Member Sign Up</h2>

      <div className="ngo-request-form">
        <form>
          <label>
            First Name:
            <input required
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input required
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>

    </div>
  );
};

export default Members;
