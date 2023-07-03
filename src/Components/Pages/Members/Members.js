import React from 'react'

function Members() {
  return (
    <div className='ngo-request-section'>
        <div className="ngo-request-form">
            <form action="">
                <input type="text" placeholder='Enter Name' /><br />
                <input type="text" placeholder='Enter Your Email' /> <br />
                <input type="text" placeholder='Enter Password' /> <br />
                <input type="text" placeholder='Confirm Password' /> <br />
                <button>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Members