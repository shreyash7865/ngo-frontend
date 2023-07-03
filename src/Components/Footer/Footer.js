import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-section'>
            <div className="footer-elements">
                <div className="footer-element">
                    <h3>Owner Details</h3>
                    <p>Name: Shreyas</p>
                    <p>Designation: Owner</p>
                </div>
                <div className="footer-element">
                    <h3>Our Solutions</h3>
                    <p>Medicine Solutions</p>
                    <p>Medical Management</p>
                    <p>Hospital Management</p>
                </div>
                <div className="footer-element">
                    <h3>Contact Details</h3>
                    <p>Email: shreyas@gmail.com</p>
                    <p>Contact: +91 5005949494</p>
                </div>
            </div>
        </div>
    )
}

export default Footer