import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaUserAlt, FaChevronDown} from 'react-icons/fa';
import '../styles/navbar.scss';
import {useActionContext} from '../contexts/actionContext';

const Navbar = () => {
  const {toggleSidebar, dashTitle, showDropdown, toggleDropdown} = useActionContext();
  return (
      <div className="dash-nav en-font">
        <div className="menu">
          <FaBars className="icon" onClick={toggleSidebar} /> <span className="t-logo"><Link to="/">RUPP</Link></span>
        </div>
        <div className="dash-title">
          <h2>{dashTitle}</h2>
        </div>
        <div className="dash-user">
          <div className="user" onClick={toggleDropdown}>
            <FaUserAlt className="icon" />
            <span>Phan Phanit</span>
            <FaChevronDown className="arrow-down" />
          </div>
          <button type="button" className={showDropdown?"dropdown active":"dropdown"}>Logout</button>
        </div>
      </div>
  );
};

export default Navbar;
