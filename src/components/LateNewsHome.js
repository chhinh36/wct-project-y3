import React from 'react'
import {Link} from 'react-router-dom';

const LateNewsHome = () => {
    return (
        <section className="late-news-home">
            <div className="global-wrapper">
                <div className="title">
                    <h2>Latest News</h2>
                    <div className="underline"></div>
                </div>
                <div className="late-news-wrapper">
                    <div className="left">
                        <div className="photo-box">
                            <Link to="/">
                                <img src="http://www.rupp.edu.kh/news/documents/145_Details.png" alt="" />
                            </Link>
                        </div>
                        <div className="info">
                            <Link to="/" className='link-info'>
                                <h3>Printing and typesetting industry</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt? Obcaecati iusto, sint quae quidem ex non exercitationem rerum explicabo quia sit ipsam doloremque commodi laboriosam et voluptatem aspernatur aperiam.</p>
                                <span>Octobor 14th, 2021</span>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://lh3.googleusercontent.com/proxy/1kzPR0J2q6cwH6ZrH40B462g6_DdjQ-MmnbnUbtzQJtt9NeLB2G_x446msbCDzaayWesvLAd___Zqs2lwkWy_w" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://athletics.co.ke/wp-content/uploads/2021/10/Galen-Rupp.jpg" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dSykaaZg_WYWpW9Dwdqk6WlbfaDv_ULonL-3nYhidNWEzgWC_rJbfJ9hckWP4ZY3m5w&usqp=CAU" alt="" />
                                <div className="info">
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</span>
                                </div>
                            </Link>
                        </div>
                        <div className="box-view-more">
                            <Link to="/news" className="btn-view-more"><span>View More</span> {'>'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LateNewsHome
