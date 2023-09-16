import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/proizvodi">Proizvodi</Link>
            <Link to="/korpa">Korpa</Link>
            <Link to="/prijava">Prijavi se</Link>
        </div>
    </div>
  )
}

export default Navbar;
