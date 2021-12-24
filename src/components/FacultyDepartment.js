import React from 'react';
import {Link} from 'react-router-dom';
import {GrFormNext} from 'react-icons/gr';

const FacultyDepartment = () => {
    return (
        <section className="faculty-department">
            <div className="global-wrapper">
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
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti consectetur dolore optio amet excepturi dignissimos dolores quisquam, nihil facere numquam, distinctio deleniti ipsum praesentium ad. Ducimus quae esse, eum laudantium provident odio harum eveniet error quod ipsam. Maiores quasi ipsam eligendi alias eos ad et ut dolorem dolore quam!</span>
                            <Link to="/">
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
                            <h3>Information Technology Engineering</h3>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti consectetur dolore optio amet excepturi dignissimos dolores quisquam, nihil facere numquam, distinctio deleniti ipsum praesentium ad. Ducimus quae esse, eum laudantium provident odio harum eveniet error quod ipsam. Maiores quasi ipsam eligendi alias eos ad et ut dolorem dolore quam!</span>
                            <Link to="/">
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
                            <h3>Information Technology Engineering</h3>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti consectetur dolore optio amet excepturi dignissimos dolores quisquam, nihil facere numquam, distinctio deleniti ipsum praesentium ad. Ducimus quae esse, eum laudantium provident odio harum eveniet error quod ipsam. Maiores quasi ipsam eligendi alias eos ad et ut dolorem dolore quam!</span>
                            <Link to="/">
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
