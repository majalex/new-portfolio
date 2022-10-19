import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Logo from '../asets/finallogo.svg';
import React, { useState } from "react"

const Navigation = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <div className="Navigation">
      <div className='desktop'>
        <img src={Logo} alt="React Logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className='mobile'>
        <FontAwesomeIcon
          icon={faBars}
          className='menu-icon'
          onClick={handleToggle}>
          {navbarOpen ? "Close" : "Open"}
        </FontAwesomeIcon>
        <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <FontAwesomeIcon icon={faXmark} className='x-mark' onClick={handleToggle}>
          {navbarOpen ? "Close" : "Open"}
          </FontAwesomeIcon>
          <NavLink to="/" id='mobile-link' className='firstLink'>Home</NavLink>
          <NavLink to="/skills" id='mobile-link'>Skills</NavLink>
          <NavLink to="/projects" id='mobile-link'>Portfolio</NavLink>
          <NavLink to="/about" id='mobile-link'>About</NavLink>
          <NavLink to="/contact" id='mobile-link'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;