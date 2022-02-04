import React from 'react'
import {FaFacebookF, FaTwitter} from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs'
import {SingleRecent, SingleOtherArticle} from '../components';

const NewsDetail = () => {
    return (
        <section className="news-detail en-font">
            <div className="news-detail-wrapper global-wrapper">
                <div className="title">
                    <h2>How AR & VR Will Change the News</h2>
                </div>
                <div className="view-date">
                    <span>35k views - Jan 5, 2021 - 3 Minutes ago</span>
                </div>
                <div className="share-container">
                    <button type="button" className="btn-facebook">
                        <FaFacebookF className="icon" />
                        <span>Facebook</span>
                    </button>
                    <button type="button" className="btn-pinterest ">
                        <BsTelegram className="icon" />
                        <span>Telegram</span>
                    </button>
                    <button type="button" className="btn-twitter">
                        <FaTwitter className="icon" />
                        <span>Twitter</span>
                    </button>
                    
                </div>
                <div className="body-article">
                    <article className="article-info">
                        <img src="https://miro.medium.com/max/2496/1*Urb_BTnM086sXqWIHTvJMQ.jpeg" alt="" onClick={(e)=>window.open(e.target.src)} />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum expedita laudantium, velit porro dolore facere optio quos quidem dolorum minus, molestias obcaecati, eligendi consectetur quis est vero incidunt dolor ducimus similique fugit aut quasi! Tenetur cumque facere fuga temporibus. Eaque doloremque quaerat maxime similique hic magnam, doloribus sed tempore vitae fuga perferendis ex totam incidunt sunt corrupti, inventore magni at quasi veritatis porro accusamus voluptatem dolor! Beatae nobis magnam ratione suscipit nostrum assumenda, neque, laudantium doloremque expedita modi earum esse ex, asperiores debitis tempore! Porro nesciunt optio expedita autem distinctio accusantium! Cumque natus, dolore maxime maiores necessitatibus nemo sequi exercitationem laudantium nihil enim pariatur nam eius unde alias ab asperiores, dignissimos, libero aliquam eaque neque. Suscipit sed veniam voluptatum est dolores recusandae aut nostrum consectetur sunt veritatis? In expedita incidunt obcaecati, debitis facilis consequuntur odit iste possimus explicabo quia tempora quasi laborum quam fugit accusamus iusto commodi porro nihil ipsum ut adipisci dolorum sapiente, recusandae quisquam! Rem reiciendis unde soluta, quasi magni nisi! Aliquid nisi ratione blanditiis illum repellat cumque incidunt sed distinctio, perferendis nihil eius deserunt ex consequatur veniam ab, natus ipsam reprehenderit numquam at. Voluptates voluptate eligendi optio fugit? Tempora sed sint quam nihil qui maiores, blanditiis vero! Nulla quos inventore itaque porro iure? Impedit in modi ipsum quibusdam tempore fugiat autem perferendis. Atque aperiam eligendi consequatur beatae, consequuntur, quisquam vero iste blanditiis nesciunt amet molestiae itaque nulla nostrum officiis nisi excepturi ipsa explicabo, ea in repellat quo? Dolor, nostrum recusandae officia doloribus molestiae eveniet. Atque commodi enim distinctio, minus incidunt laboriosam autem nobis debitis quibusdam ad doloribus sit inventore? Labore quae incidunt unde expedita, doloribus suscipit asperiores vel, nobis laudantium, cupiditate in! Aut necessitatibus molestias dignissimos modi autem, tempora eius neque iste ducimus itaque culpa quia voluptatum accusantium suscipit eaque non? Ab tempora animi necessitatibus labore iure.
                        </p>
            
                        
                    </article>
                    <div className="most-recent">
                        <h3>RECENT NEWS</h3>
                        <div className="body-recent">
                            {
                                Array.from({length: 6}).map((_, index)=>{
                                    return <SingleRecent key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="line-title">
                    <h3>Other Articles</h3>
                    <hr />
                </div>
                <div className="other-article-wrapper">
                    {
                        Array.from({length: 10}).map((_, index)=>{
                            return <SingleOtherArticle key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewsDetail

