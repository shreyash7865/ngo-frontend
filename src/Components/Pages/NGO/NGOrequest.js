import React, { useState } from 'react'
import './NGOrequest.css'
function NGOrequest() {
  const [ngoname, setNgoName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [medicineQty, setMedicineQty] = useState(0);


  const RequestMed = async(e)=>{
    e.preventDefault();
    const response = await fetch(`https://ngo-backend-wz9s.onrender.com/api/ngo/request-medicine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ngoname, medicineName, medicineQty
      })
    })
    const data = await response.json();
    console.log(data);
    if(!data){
      alert("Add Full Details")
    }
    else{
      alert("Your Request is sent...")
    }

    setNgoName("")
    setMedicineName("")
    setMedicineQty(0)
  }

  return (
    <div className='ngo-request-section'>
        <h3>NGO request</h3>
        <div className="ngo-request-form">
            <form onSubmit={RequestMed} method='post'>
                <input type="text" required  value={ngoname} onChange={(e)=>setNgoName(e.target.value)} placeholder='Enter Your NGO Username' /><br />
                <input type="text" required value={medicineName} onChange={(e)=>setMedicineName(e.target.value)} placeholder='Medicine Needed' />  <br />
                <input type="number" required value={medicineQty} onChange={(e)=>setMedicineQty(e.target.value)} placeholder='Enter Quantity' /> <br />
                <button type='submit'>Request</button>
            </form>
        </div>
        <div className="ngo-register">
            <h3>Don't have an account?</h3>
            <a href="/ngo-signup">Register</a>
        </div>
    </div>
  )
}

export default NGOrequest