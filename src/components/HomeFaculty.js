import React from 'react'
import {Link} from 'react-router-dom';

const HomeFaculty = () => {
    return (
        <section className="faculty">
            <div className="global-wrapper faculty-wrapper">
                <div className="title">
                    <h2>Faculty</h2>
                </div>
                <div className="faculty-container">
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/" className="info">
                            <h3>Information Technology Engineering Information Technology Engineering Information Technology Engineering</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/" className="info">
                            <h3>Information Technology Engineering</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/" className="info">
                            <h3>Information Technology Engineering</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/" className="info">
                            <h3>Information Technology Engineering</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/" className="info">
                            <h3>Information Technology Engineering</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFaculty
