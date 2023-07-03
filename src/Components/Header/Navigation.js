import React from 'react'
import './Navigation.css'
function Navigation() {
  return (
    <div className="navigation">
        <div className="logo" style={{fontWeight: '800'}}>
          NGO Medicine
        </div>
        <div className="section-links">
          <div className="links"><a style={{textDecoration: 'none', color: 'black'}} href="/admin-login">Admin</a></div>
          <div className="links"><a style={{textDecoration: 'none', color: 'black'}} href="/request-ngo">NGO</a></div>
          <div className="links"><a style={{textDecoration: 'none', color: 'black'}} href="/donor-registration">Donor</a></div>
        </div>
      </div>
  )
}

export default Navigation