import React from 'react'
import './AdminPanel.css'

let donor_list = [
  { name: 'Ratan Singh', email: 'ratan@gmail.com', contact: '9102929292', medicines_donated:{1: 'Paracetamol', 2: 'Sumo D'} },
  { name: 'Shubhendu Kumar', email: 'shubhendu@gmail.com', contact: '7005658779', medicines_donated:{1: 'Paracetamol', 2: 'Sumo D'} },
  { name: 'Trikool', email: 'trikool@gmail.com', contact: '9102929292', medicines_donated:{1: 'Paracetamol', 2: 'Sumo D'}}
]
function ManageMember() {
  return (
    <div className='manage-donor-section'>
        <h3>Manage Donor</h3>
        <div className="donors-giveaway">
          <table>
            <thead>
              <tr>
                <td style={{fontWeight: '700'}}>Name Of Donor</td>
                <td style={{fontWeight: '700'}}>Email ID</td>
                <td style={{fontWeight: '700'}}>Contact Number</td>
                <td style={{fontWeight: '700'}}>Medicines Donated</td>
              </tr>
            </thead>
            <tbody>
                {
                  donor_list.map((donor)=>{
                    return(
                      <>
                        <tr>
                          <td>{donor.name}</td>
                          <td>{donor.email}</td>
                          <td>{donor.contact}</td>
                          <td>{donor.medicines_donated[1]}, {donor.medicines_donated[2]}</td>
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

export default ManageMember