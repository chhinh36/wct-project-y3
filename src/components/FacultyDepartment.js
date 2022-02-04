import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {GrFormNext} from 'react-icons/gr';

const FacultyDepartment = () => {
    const {faculty: facultyUrl} = useParams();
    return (
        <section className="faculty-department en-font">
            <div className="global-wrapper faculty-department-wrapper">
                <div className="title">
                    <h2>Our Departments</h2>
                </div>
                <div className="body-wrapper">
                    <div className="single-department">
                        <div className="left">
                            <img src="https://tees.tamu.edu/eit/_files/_images/_feature-images/Cybersecurity-feature-research-ResearcherLookingAtTablet-21Nov2019.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h3>Information Technology Engineering</h3>
                            <span>Bachelor of Information Technology Engineering (ITE) program at Faculty of Engineering, Royal University of Phnom Penh is designed to provide high-quality training in Information Technology which meets the current and future labor market requirements by emphasizing a broad foundation of computer organization, software, and mathematics both theoretical and practical aspects.</span>
                            <Link to={`/${facultyUrl}/information-technology-engineering`} className="btn-view-more">
                                <span>View More</span>
                                <GrFormNext className="icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="single-department">
                        <div className="left">
                            <img src="https://worldscholarshipforum.com/wp-content/uploads/2021/05/biomedical-engineering-masters-programs.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h3>BioEngineering</h3>
                            <span>Bachelor of Information Technology Engineering (ITE) program at Faculty of Engineering, Royal University of Phnom Penh is designed to provide high-quality training in Information Technology which meets the current and future labor market requirements by emphasizing a broad foundation of computer organization, software, and mathematics both theoretical and practical aspects.</span>
                            <Link to={`/${facultyUrl}/information-technology-engineering`} className="btn-view-more">
                                <span>View More</span>
                                <GrFormNext className="icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="single-department">
                        <div className="left">
                            <img src="http://gee.itc.edu.kh/academics/img/course/3.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h3>Telecommunication and Electronic Engineering</h3>
                            <span>Bachelor of Information Technology Engineering (ITE) program at Faculty of Engineering, Royal University of Phnom Penh is designed to provide high-quality training in Information Technology which meets the current and future labor market requirements by emphasizing a broad foundation of computer organization, software, and mathematics both theoretical and practical aspects.</span>
                            <Link to={`/${facultyUrl}/information-technology-engineering`} className="btn-view-more">
                                <span>View More</span>
                                <GrFormNext className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacultyDepartment
