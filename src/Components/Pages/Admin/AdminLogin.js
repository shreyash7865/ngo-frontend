import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import './AdminLogin.css'

function AdminLogin() {

  // Navigation Usage
  const navigate = useNavigate();

  const [regdNumber, setRegdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const AdmLogin = async(e)=>{
  //   e.preventDefault();
  //   const response = await fetch(`https://ngo-backend-wz9s.onrender.com/api/admin/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       regdNumber, password
  //     })
  //   })
  //   const data = await response.json();
  //   console.log(data)
  //   if(!data){
  //     alert("Invalid Credentials")
  //     navigate('/admin-login')
  //   }else{
  //     alert("Logged in")
  //     navigate('/admin-dashboard')
  //   }
  // }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ngo-backend-wz9s.onrender.com/api/admin/login', {
        regdNumber: regdNumber,
        password: password
      });

      if (response.data.result) {
        // Login successful, perform necessary actions (e.g., redirect to admin dashboard)
        console.log(response.data);
        navigate('/admin-dashboard');
      } else {
        // Invalid credentials
        setError('Invalid credentials');
        alert("Invalid Credentials")
        // navigate('/admin-login');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };
  return (
    <div className='admin-login-section'>
        <div className="admin-login-form">
            <form onSubmit={handleLogin} method='post'>
                <input type="number" value={regdNumber} onChange={(e)=>setRegdNumber(e.target.value)} placeholder='Enter Your Registration Number' /><br />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' /> <br/> <br/>
                <button className='admin-login-submit' style={{backgroundColor: 'black', color: 'white', width: '80%', height: '30px', cursor: 'pointer'}} type="submit" >Submit</button>

            </form>
        </div>
    </div>
  )
}

export default AdminLogin