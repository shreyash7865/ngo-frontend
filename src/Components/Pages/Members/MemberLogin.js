import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MemberLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const Login_member = async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://ngo-backend-wz9s.onrender.com/api/donor/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        email, password
      })
    })
    const data = await(response.json());
    console.log(data);

    if(!data){
      alert("Invalid Credentials..")
    }else{
      alert("You Logged In");
      navigate('/donor-dashboard')
    }

    setEmail("")
    setPassword("")

  }

  return (
    <div className='ngo-request-section'>
    <div className="ngo-request-form">
        <form onSubmit={Login_member} method='post'>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email' /> <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' /> <br />
            <button type='submit'>Submit</button>

        </form>
    </div>
</div>
  )
}

export default MemberLogin