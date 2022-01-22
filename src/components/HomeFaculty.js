import React from 'react'
import {Link} from 'react-router-dom';

const HomeFaculty = () => {
    return (
        <section className="faculty en-font">
            <div className="global-wrapper faculty-wrapper">
                <div className="title">
                    <h2>Faculty</h2>
                </div>
                <div className="faculty-container">
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/faculty-of-science" className="info">
                            <h3>Faculty of Science</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/faculty-of-social-science-and-humanities" className="info">
                            <h3>Faculty of Social Science and Humanities</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/faculty-of-engineering" className="info">
                            <h3>Faculty of Engineering</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/faculty-of-development-studies" className="info">
                            <h3>Faculty of Development Studies</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/faculty-of-education" className="info">
                            <h3>Faculty of Education</h3>
                        </Link>
                    </div>
                    <div className="single-faculty">
                        <div className="left-style"></div>
                        <Link to="/institute-of-foriegn-languages" className="info">
                            <h3>Institute of Foriegn Languages</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFaculty
