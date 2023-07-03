import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function DonorDashboard() {
  const [nameOfMedicine, setNameOfMedicine] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [donorName, setDonorName] = useState("");
  const navigate = useNavigate();

  const postMedicine = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:2020/api/donor/add-medicine`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameOfMedicine, Quantity, ExpiryDate, donorName
      })
    })
    const data = await response.json();
    if(!data){
      alert("Add Full Details")
    }
    else{
      alert("Medicine Posted")
      window.location.reload();
    }
  }

  return (
    <div className='ngo-request-section'>
        <h3>Donor Dashboard</h3>
    <div className="ngo-request-form">
        <form onSubmit={postMedicine} method='POST'>
            <input value={nameOfMedicine} onChange={(e)=>setNameOfMedicine(e.target.value)} type="text" placeholder='Medicine' /><br />
            <input value={Quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" placeholder='Enter Quantity' /> <br />
            <input value={ExpiryDate} onChange={(e)=>setExpiryDate(e.target.value)} type="text" placeholder='dd/mm/yy' /> <br />
            <input value={donorName} onChange={(e)=>setDonorName(e.target.value)} type="text" placeholder='Donor name' /> <br />
            <button type='submit'>Submit</button>

        </form>
    </div>
</div>
  )
}

export default DonorDashboard