import React from 'react'
import {Link} from 'react-router-dom';

const NewsBox = () => {
    return (
        <div className="news-box">
            <div className="news-box-wrapper global-wrapper">
                {
                    Array.from({length: 20}).map((_, index)=>{
                        return (
                            <div className="single-box" key={index}>
                                <div className="img-box">
                                    <img src="https://i.ytimg.com/vi/0111UzSdlnc/maxresdefault.jpg" alt="" onClick={()=>window.open("https://i.ytimg.com/vi/0111UzSdlnc/maxresdefault.jpg")} />
                                </div>
                                <div className="info">
                                    <Link to={`/news/${index}`}>
                                        <div className="info-wrapper">
                                            <h3>Title of news</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio doloribus sequi, aut veniam reiciendis ullam dolore qui at cum odit ab vero obcaecati omnis, enim voluptatibus dicta? ...</p>
                                            <span>October 28th, 2021</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="view-more-wrapper global-wrapper">
                <button className="btn-view-more" type="button">See more...</button>
            </div>
        </div>
    )
}

export default NewsBox
