import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from '../assets/finallogo.svg';
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
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
          <Link to="/" id='mobile-link' className='firstLink'>Home</Link>
          <Link to="/skills" id='mobile-link'>Skills</Link>
          <Link to="/projects" id='mobile-link'>Portfolio</Link>
          <Link to="/about" id='mobile-link'>About</Link>
          <Link to="/contact" id='mobile-link'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;