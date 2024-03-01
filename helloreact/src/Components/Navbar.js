import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/miniproject"><li>Mini ApiProject</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;


