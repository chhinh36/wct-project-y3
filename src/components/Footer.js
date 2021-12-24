import React from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import {BsFillTelephoneFill, BsFacebook, BsTelegram, BsYoutube, AiFillTwitterCircle, BsTwitter} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BiCopyright} from 'react-icons/bi';

function Footer() {
    const navigate = useNavigate ();
    return (
        <section id="footer">
            <div className="global-wrapper footer-wrapper">
                <div className="logo">
                    <img onClick={()=>navigate('/')} src="https://upload.wikimedia.org/wikipedia/en/a/a2/RUPP_logo.PNG" alt="" />
                    <h3>RUPP</h3>
                </div>
                <div className="quick-link">
                    <h2>Quick Link</h2>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/home">Faculty</Link>
                        </li>
                        <li>
                            <Link to="/home">Scholarship</Link>
                        </li>
                        <li>
                            <Link to="/home">Information</Link>
                        </li>
                        <li>
                            <Link to="/home">Event</Link>
                        </li>
                        <li>
                            <Link to="/home">Partnership</Link>
                        </li>
                    </ul>
                </div>
                <div className="services">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde iusto odio itaque id sunt, expedita facere amet molestias totam?</p>
                </div>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi amet nemo praesentium aliquid accusamus minima corporis harum totam vitae reiciendis.</p>
                </div>
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <div className="info-text">
                        <div><span><BsFillTelephoneFill /></span><p>+855 12345678</p></div>
                        <div><span><MdEmail /></span><p>abc@rupp.edu.kh</p></div>
                    </div>
                    <div className="social-media">
                        <Link to="/">
                            <BsFacebook className="icon" />
                        </Link>
                        <Link to="/">
                            <BsTelegram className="icon" />
                        </Link>
                        <Link to="/">
                            <BsYoutube className="icon" />
                        </Link>
                        <Link to="/">
                            <BsTwitter className="icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p><BiCopyright /> Copyright 2021 | All Rights Reserved by ITE Team</p>
            </div>
        </section>
    )
}

export default Footer
