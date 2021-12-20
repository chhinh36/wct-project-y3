import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import Logo from '../images/rupp-logo.png'
import {HiOutlineSearch, HiMenu} from 'react-icons/hi'
import {useActionContext} from '../contexts/actionContext'

function Navbar() {
    const {isSearch, OpenSearch, openSidebar} = useActionContext();
    return (
        <header className="en-font">
            <div className="wrapper">
                <NavLink to="/" className="logo">
                    <img src={Logo} alt="" />
                    <p>RUPP</p>
                    <div className="search-box">
                        <form className='frm'>
                            <input type="text" placeholder="Search" className='frm-control' />
                            <HiOutlineSearch className='icon' />
                        </form>
                    </div>
                </NavLink>
                <ul>
                    <li>
                        <NavLink className="color-white" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>Faculty</li>
                    <li>Scholarship</li>
                    <li>News</li>
                    <li>Map</li>
                    <li>Contact</li>
                    <li className={`${isSearch?"search active":"search"}`}>
                        <form>
                            <input type="text" placeholder="Search" />
                            <HiOutlineSearch onClick={OpenSearch} className="icon" />
                        </form>
                    </li>
                </ul>
                <div className="right">
                    <HiMenu className="menu-icon" onClick={openSidebar} />
                    <NavLink to="/signup" className="btn btn-signup">Sign Up</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar
