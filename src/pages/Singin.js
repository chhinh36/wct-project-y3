import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import GoogleLogo from '../images/google.png';
import FacebookLogo from '../images/facebook.png';
import {FaRegEnvelope, FaEyeSlash, FaEye} from 'react-icons/fa';
import Logo from '../images/rupp-logo.png';

const Singin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({...inputValue, [name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        setLoading(false);
    }
    const googleLogin = async () => {
        
    }
    const facebookLogin = async () => {
        
    }
    return (
        <section id="signin-signup-section" className="font-poppin">
            <div className="sign-wrapper">
                <div className="sigin-body">
                    <div className="header">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <span>Welcome to RUPP University</span>
                    </div>
                    <form className="frm" onSubmit={handleSubmit}>
                        <h3>Sign In</h3>
                        <div className="frm-control">
                            <label htmlFor="email">Email</label>
                            <div className="input">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                                <FaRegEnvelope className="icon" />
                                {/* <span className="error-msg">message</span> */}
                            </div>

                        </div>
                        <div className="frm-control">
                            <label htmlFor="password">Password</label>
                            <div className="input">
                                <input
                                    type={`${showPassword?'text':'password'}`}
                                    name="password"
                                    id="password"
                                    onChange={handleInputChange}
                                    placeholder="Enter password"
                                />
                                {
                                    showPassword? <FaEyeSlash className="icon" onClick={()=>setShowPassword(false)} />:<FaEye className="icon" onClick={()=>setShowPassword(true)} />
                                }
                                {/* <span className="error-msg">message</span> */}
                            </div>
                        </div>
                        <div className="frm-control remember-me">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label htmlFor="remember-me">Remember Me</label>
                            <Link to="/" className="forget-pass">Forget password?</Link>
                        </div>
                        <div className="frm-control btn-container">
                            <button type="submit" className="btn-submit" style={{pointerEvents: loading?"none":"auto", opacity: loading?"0.6":"1"}}>
                                {
                                    loading && <div className="spinner-load"></div>
                                }
                                <span>Get Started</span>
                            </button>
                            <p><span>Don't have account?</span> <Link to="/signup">Create an account</Link></p>
                        </div>
                    </form>
                    <div className="social">
                        <h3>Login</h3>
                        <div className="social-btn">
                            <button type="button" className="btn-social-media" onClick={googleLogin}>
                                <img src={GoogleLogo} alt="Google Logo" />
                                <span>Sign in with Google</span>
                            </button>
                            <button type="button" className="btn-social-media" onClick={facebookLogin}>
                                <img src={FacebookLogo} alt="Facebook Logo" />
                                <span>Sign in with Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Singin
