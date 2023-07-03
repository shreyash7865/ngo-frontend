import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// let ngo_request_list = [
//     { name: 'Life NGO', email: 'lifengo@gmail.com', contact: '9102929292', rejection: '☓', approval: '√' },
//     { name: 'Zindagi NGO', email: 'zindagi@gmail.com', contact: '7005658779', rejection: '☓', approval: '√' },
//     { name: 'BizLife', email: 'bizlife@gmail.com', contact: '9102929292', rejection: '☓', approval: '√' }
// ]



function RequestedMedicine() {

    
    // const [id, setId] = useState(0);
    // const [name, setName]= useState("");
    // const [username, setUsername]= useState("");
    // const [password, setPassword]= useState("");
    // const [address, setAddress]= useState("");

    // const [ngoname, setNgoName] = useState("");

    const [ngoData, setNgoData]= useState([]);

    const getMedicineData = (e)=>{
        fetch(`https://ngo-backend-wz9s.onrender.com/api/admin/requested-medicine`)
        .then((res)=> res.json())
        .then((data)=>{
          console.log(data);
          setNgoData(data);
        })
        .catch((err)=>{
          console.log(err.message)
        })
      }
      useEffect(()=>{
        getMedicineData();
      }, [])

    return (
        <div className='manage-ngo-section'>
            <h3>Manage NGO</h3>
            <div className="ngo-requests">
                <table>
                    <thead>
                        <tr>
                        <td style={{fontWeight: '700'}}>Name Of NGO</td>
                        <td style={{fontWeight: '700'}}>Medicine Required</td>
                        <td style={{fontWeight: '700'}}>Medicine Quantity</td>
                        <td style={{fontWeight: '700'}}>Check</td>
                        <td style={{fontWeight: '700'}}>Reject</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                {
                    ngoData.map((ngo, index) => {
                        return (
                            <>
                                <tr>
                                    <td >{ngo.ngoname}</td>
                                    <td>{ngo.medicineName}</td>
                                    <td>{ngo.medicineQty}</td>
                                    <td style={{fontWeight: '700', color: 'white', backgroundColor: 'green'}}>+</td>
                                    <td style={{fontWeight: '700', color: 'white', backgroundColor: 'red'}}>-</td>
                                </tr>
                            </>
                            
                        )
                    })
                }
                </tbody>
                </table>
                
                
            </div>
        </div>
    )
}

export default RequestedMedicine