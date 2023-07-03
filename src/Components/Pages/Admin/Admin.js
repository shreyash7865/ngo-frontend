import React from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
function Admin() {
  return (
    <div className='admin-dashboard-section'>
      <Link to={'/manage-ngo'}>Manage NGO</Link>
      <Link to={'/manage-member'}>Manage Member</Link>
      <Link to={'/view-medicines'}>List Of Medicines</Link>
      <Link to={'/requested-medicine'}>NGO Requests</Link>
    </div>
  )
}

export default Admin