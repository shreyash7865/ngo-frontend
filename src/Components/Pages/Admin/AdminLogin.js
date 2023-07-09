import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import './AdminLogin.css'

function AdminLogin() {

  // Navigation Usage
  const navigate = useNavigate();

  const [regdNumber, setRegdNumber] = useState("");
  const [password, setPassword] = useState("");
  const AdmLogin = async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://ngo-backend-wz9s.onrender.com/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        regdNumber, password
      })
    })
    const data = await response.json()
    if(data){
      navigate('/admin-dashboard')
    }
    else{
      alert("Invalid Credentials")
    }
    console.log(data);
    setRegdNumber("");
    setPassword("");


    
    
  }
  return (
    <div className='admin-login-section'>
        <div className="admin-login-form">
            <form onSubmit={AdmLogin} method='post'>
                <input type="number" value={regdNumber} onChange={(e)=>setRegdNumber(e.target.value)} placeholder='Enter Your Registration Number' /><br />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' /> <br/> <br/>
                <button className='admin-login-submit' style={{backgroundColor: 'black', color: 'white', width: '80%', height: '30px', cursor: 'pointer'}} type="submit" >Submit</button>

            </form>
        </div>
    </div>
  )
}

export default AdminLogin