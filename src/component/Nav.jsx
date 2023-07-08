import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DevCareer</Link>
      <ul className="nav-links">
        <li><Link to="/reg">Regrestration</Link></li>
        <li><Link to="/login">Login Here !</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
