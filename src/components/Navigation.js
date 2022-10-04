import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navigation;