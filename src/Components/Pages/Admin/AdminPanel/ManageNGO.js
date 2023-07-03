import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
let ngo_request_list = [
    { name: 'Life NGO', email: 'lifengo@gmail.com', contact: '9102929292', rejection: '☓', approval: '√' },
    { name: 'Zindagi NGO', email: 'zindagi@gmail.com', contact: '7005658779', rejection: '☓', approval: '√' },
    { name: 'BizLife', email: 'bizlife@gmail.com', contact: '9102929292', rejection: '☓', approval: '√' }
]



function ManageNGO() {

    const [ngoData, setNgoData]= useState([]);
    const [id, setId] = useState(0);
    const [name, setName]= useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [address, setAddress]= useState("");




    return (
        <div className='manage-ngo-section'>
            <h3>Manage NGO</h3>
            <div className="ngo-requests">
                <table>
                    <thead>
                        <tr>
                        <td style={{fontWeight: '700'}}>Name Of NGO</td>
                        <td style={{fontWeight: '700'}}>Official Email ID</td>
                        <td style={{fontWeight: '700'}}>Contact Details</td>
                        <td style={{fontWeight: '700'}}>Approval</td>
                        <td style={{fontWeight: '700'}}>Rejection</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                {
                    ngo_request_list.map((ngo, index) => {
                        return (
                            <>
                                <tr>
                                    <td >{ngo.name}</td>
                                    <td>{ngo.email}</td>
                                    <td>{ngo.contact}</td>
                                    <td style={{fontWeight: '700', color: 'white', backgroundColor: 'green'}}>{ngo.approval}</td>
                                    <td style={{fontWeight: '700', color: 'white', backgroundColor: 'red'}}>{ngo.rejection}</td>
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

export default ManageNGO