import React from 'react'
import tid2 from "./tid2.png"
import { useNavigate } from 'react-router-dom';


const Registration = ({isauth}) => {

  const navigate=useNavigate()

  const gotohomepage=()=>{
    navigate('/')
  }
  const gotologinpage=()=>{
    navigate('/login')
  }
  return (
    <>

    {
      !isauth ?(<><h1 className='notloginh1'>Hey Buddy first you need to login before Registration !!</h1> <h3 onClick={gotologinpage} className='notloginh3'>Go To Login Page</h3><h3 onClick={gotohomepage} className='notloginh33'>Go To Home Page</h3><img className='img2' src={tid2} alt="" /></> ):(
        
    <div className='mainbox'>
     <h1>Register Here</h1>
     <div className="mainbox2">
      <h4>Full Name</h4>
      <input type="text" placeholder='Your Name' />
     </div>
     <div className="mainbox2">
      <h4>Email Address</h4>
      <input type="email" placeholder='Devcareer@gmail.com' />
     </div>
     <div className="mainbox2">
      <h4>Contact Info</h4>
      <input type="number" placeholder='+91 98548****3' />
     </div>
     <div className="mainbox2">
      <h4>Profile Link</h4>
      <input type="text" placeholder='Portfolio / Linked in / GitHub'/>
     </div>
     <div className="mainbox2">
      <h4>Other Profile Links</h4>
      <input type="text" placeholder='Projects / Linked in / Behance' />
     </div>
     <div className="mainbox2">
      <h4>Profession</h4>
      <input type="text" placeholder='Domain'/>
     </div>
     <div className="mainbox2">
      <h4>Experience</h4>
      <input type="number" placeholder='0-3 years'/>
     </div>
     <div className="mainbox22">
      <h4>Upload Your Resume Here</h4>
      <input type="file" />
     </div>
     <button className='button'>Submit Response</button>
     <img  src={tid2} alt="" />
    </div>
      )
    }
    </>
  )
}

export default Registration
