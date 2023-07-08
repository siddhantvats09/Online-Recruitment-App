import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div>
       <h1 className='footerh1'>About Us</h1>
       <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-heading">Other Paths</h3>
        <ul className="footer-list">
          <li>Dev-Develop.in</li>
          <li>We-Lancing.io</li>
          <li>RasonMonga.com</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">DEV-CAREER</h3>
        <p className="footer-description">Our online recruitment company revolutionizes the hiring process by providing a platform that seamlessly connects employers with a vast pool of talented job seekers</p>
        <div className="footer-icons">
          <a href="#"><TwitterIcon/></a>
          <a href="#"> import GoogleIcon from '@mui/icons-material/Google'; </a>
          <a href="#"> <FacebookIcon/> </a>
          <a href="#"> <LinkedInIcon/> </a>
          <a href="#"> <LanguageIcon/> </a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">Contact</h3>
        <p className="footer-contact">Phone: 123-456-7890</p>
        <p className="footer-contact">Email: info@example.com</p>
        <p className="footer-contact">www.devcareer.com</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
