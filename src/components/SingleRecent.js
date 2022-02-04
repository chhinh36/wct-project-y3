import React from 'react'
import {Link} from 'react-router-dom';
import {MdOutlineDateRange} from 'react-icons/md';

const SingleRecent = () => {
    return (
        <div className="news-most-recent single-box">
            <div className="img-box">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOjqWNRPC_yGv7wZ9b0wB0yr1OzW0sPReirt1fprBKV7dmf0CWpS4oyqTq82SIM6tu9g&usqp=CAU" alt="" />
                </Link>
            </div>
            <div className="info">
                <Link to="/">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>
                </Link>
                <div className="date">
                    <MdOutlineDateRange className="icon" />
                    <span>June 08, 2021</span>
                </div>
            </div>
        </div>
    )
}

export default SingleRecent
