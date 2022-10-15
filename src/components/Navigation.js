import { NavLink } from 'react-router-dom';
import Logo from '../asets/finallogo.svg';

const Navigation = () => {
  return (
    <div className="Navigation">
      <img src={Logo} alt="React Logo" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Portfolio</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navigation;