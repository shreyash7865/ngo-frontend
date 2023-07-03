import React, { useState, useEffect} from 'react'



function ViewMedicines() {
  const [medData, setMedData]= useState([]);

  const [status, setStatus] = useState(null);

  const deleteMedicine = (id)=>{
    fetch(`https://ngo-backend-wz9s.onrender.com/api/admin/medicines/`+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(()=>setStatus('Deleted Successfully'))
    .then(()=>window.location.reload())
    .then(()=>console.log("Deleted"))
    .catch((err)=>console.log(err)) 

    
  }

  


  const getMedicineData = (e)=>{
    fetch(`https://ngo-backend-wz9s.onrender.com/api/admin/medicines`)
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      setMedData(data);
    })
    .catch((err)=>{
      console.log(err.message)
    })
    
  }

  useEffect(()=>{
    getMedicineData();
  }, [])


  

  return (
    <div className='view-medicine-section'>
      <h3>View Medicine</h3>

      <div className="medicine-information">
        <table>
          <thead>
            <tr>
              <td>S.No.</td>
              <td>Medicine</td>
              <td>Quantity</td>
              <td>Exp. Date</td>
              <td>Donor Name</td>
              <td>Add Qty</td>
              <td>Sub Qty</td>
            </tr>
          </thead>

          <tbody>
            {
              medData.map((medicine)=>{
                return(
                  <tr>
                    <td>{medicine.id}</td>
                    <td>{medicine.nameOfMedicine}</td>
                    <td>{medicine.Quantity}</td>
                    <td>{medicine.ExpiryDate}</td>
                    <td>{medicine.donorName}</td>
                    <td style={{backgroundColor: 'green'}}>+</td>
                    <td onClick={()=>deleteMedicine(medicine.id)} style={{backgroundColor: 'red'}}>-</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ViewMedicines