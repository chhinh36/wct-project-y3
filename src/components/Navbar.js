import React from 'react'
import {NavLink} from 'react-router-dom';
import Logo from '../images/rupp-logo.png'
import {HiOutlineSearch} from 'react-icons/hi'

function Navbar() {
    return (
        <header className="en-font">
            <NavLink to="/" className="logo">
                <img src={Logo} alt="" />
                <p>RUPP</p>
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
                <li className="search active">
                    <form>
                        <input type="text" placeholder="Search" />
                        <HiOutlineSearch className="icon" />
                    </form>
                </li>
            </ul>
            <NavLink to="/signup" className="btn btn-signup">Sign Up</NavLink>
        </header>
    )
}

export default Navbar
