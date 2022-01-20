import React from 'react'
import {Link} from 'react-router-dom';

const LateNewsHome = () => {
    return (
        <section className="late-news-home en-font">
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
                                
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laudantium!</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to="/" className='link-box'>
                                
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                                    <span>7th December, 2021</span>
                                    <div className="news-underline"></div>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LateNewsHome
