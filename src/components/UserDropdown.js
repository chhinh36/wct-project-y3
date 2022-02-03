import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5';
import {FiLogOut} from 'react-icons/fi';
import {RiDashboardFill} from 'react-icons/ri';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs';
import {useUserContext} from '../contexts/userContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const UserDropdown = () => {
    const navigate = useNavigate();
    const {myUser, removeUser, setLoading} = useUserContext();
    const handleLogout = async () => {
        setLoading(true);
        try {
            await axios.get('/api/v1/auth/logout');
            removeUser();
            navigate("/");
            toast.success("Logout successfully.");
        } catch (error) {
            toast.success("Logout error.");
        }
        setLoading(false)
    }
  return (
    <div className="user">
        <FaUserCircle className="icon-user" />
        <div className="dropdown">
            <div className="user-header">
                <h3>{myUser.name}</h3>
                <h4>{myUser.email}</h4>
            </div>
            <ul className="user-body">
                {
                    (myUser.role==='admin' || myUser.role==='manager') && (
                        <li>
                            <RiDashboardFill className="icon" />
                            <span><Link to="/dashboard">Go To Dashboard</Link></span>
                        </li>
                    )
                }
                <li>
                    <BsFillFileEarmarkCheckFill className="icon" />
                    <span><Link to="/">Check Registration</Link></span>
                </li>
                <li>
                    <IoSettingsSharp className="icon" />
                    <span><Link to="/setting">Setting</Link></span>
                </li>
            </ul>
            <div className="user-footer">
                <span>Logout</span>
                <FiLogOut className="icon-signout" onClick={handleLogout} />
            </div>
        </div>
    </div>
  );
};

export default UserDropdown;
