import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './assets/logo7.png'
import { useEffect } from 'react'

const Navbar = ({ status, setStatus }) => {

  useEffect(() => {
    setStatus(localStorage.getItem('status') === 'true');
  },[])

  const handleLogout = () => {
    // localStorage.removeItem("name");
    // localStorage.removeItem("password");
    // localStorage.removeItem("email");
    // localStorage.removeItem("phone");
    // localStorage.removeItem("status");
    localStorage.setItem('status', false)
    setStatus(false)
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
        <h1>CELESTIA</h1>
      </div>
      <div className='nav-links'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/schedule">SCHEDULE</Link></li>
        <li><Link to="/teamhead">TEAMS</Link></li>
        <li><Link to="/profile">PROFILE</Link></li>
        {!status ? (<li>
            <Link to="/login">LOG IN</Link>
          </li>
        ) : (
          <li onClick={handleLogout}><Link to="/">LOGOUT</Link></li>
        )}

      </div>
    </nav>
  )
}

export default Navbar
