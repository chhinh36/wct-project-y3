import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaBars, FaUserAlt, FaChevronDown} from 'react-icons/fa';
import '../styles/navbar.scss';
import {useActionContext} from '../contexts/actionContext';
import {useUserContext} from '../../contexts/userContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const Navbar = () => {
  const {toggleSidebar, dashTitle, showDropdown, toggleDropdown} = useActionContext();
  const navigate = useNavigate();
  const {myUser, removeUser, setLoading} = useUserContext();
  const handleLogout = async () => {
    setLoading(true);
    try {
        const logout = await axios.get('/api/v1/auth/logout');
        console.log(logout);
        removeUser();
        navigate("/");
        toast.success("Logout successfully.");
    } catch (error) {
        toast.success("Logout error.");
    }
    setLoading(false)
  }
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
            <span>{myUser.name}</span>
            <FaChevronDown className="arrow-down" />
          </div>
          <button type="button" className={showDropdown?"dropdown active":"dropdown"} onClick={handleLogout}>Logout</button>
        </div>
      </div>
  );
};

export default Navbar;
