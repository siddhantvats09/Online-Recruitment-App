import React from 'react'
import EastIcon from '@mui/icons-material/East';
import girl from "./girl.png"

const Home = () => {
  return (
    <div>
      <h1 className='mainheading'>5000+ New Jobs</h1>
      <h1 className='mainheading2'>Every Month</h1>
      <h3 className='mainheading3'>Build your</h3>
      <div className="layout"><h3 className='mainheading5' >Dream Career</h3></div>
      <h3 className='mainheading4'>With Us ! </h3>
      <img className='image' src={girl} alt="" />
    </div>
  )
}

export default Home
