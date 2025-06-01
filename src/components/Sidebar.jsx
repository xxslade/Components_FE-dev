import './Sidebar.css';
import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="outer-box">
      <div className="heading">
        Get started with your element!
      </div>
      <div className="elements">
        <NavLink to="/" className={({ isActive }) => isActive ? 'indi-elements active' : 'indi-elements'}>Buttons</NavLink>
        <NavLink to="/navbars" className={({ isActive }) => isActive ? 'indi-elements active' : 'indi-elements'}>Navbars</NavLink>
        <NavLink to="/cards" className={({ isActive }) => isActive ? 'indi-elements active' : 'indi-elements'}>Cards</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
