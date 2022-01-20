import React from 'react'
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa';
import {SingleRecent, SingleOtherArticle} from '../components';

const NewsDetail = () => {
    return (
        <section className="news-detail">
            <div className="news-detail-wrapper global-wrapper">
                <div className="title">
                    <h2>Apple Planning Big Mac Redesign and Half-Sized Old Mac</h2>
                </div>
                <div className="view-date">
                    <span>35k views - Jan 5, 2021 - 3 Minutes ago</span>
                </div>
                <div className="share-container">
                    <button type="button" className="btn-share">
                        <FaFacebookF className="icon" />
                        <span>Facebook</span>
                    </button>
                    <button type="button" className="btn-share">
                        <FaTwitter className="icon" />
                        <span>Twitter</span>
                    </button>
                    <button type="button" className="btn-share">
                        <FaPinterest className="icon" />
                        <span>Pinterest</span>
                    </button>
                </div>
                <div className="body-article">
                    <article className="article-info">
                        <img src="" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat culpa veritatis qui commodi magnam velit dolorem suscipit accusamus neque, voluptate, laborum corrupti omnis consectetur. Aliquam perspiciatis accusantium error voluptatem, quidem, repudiandae consequatur sed harum qui quibusdam natus est tempore ipsam unde delectus illum in rem et quo magnam dignissimos porro nulla voluptatibus? Sit ratione voluptates ex maxime ad aspernatur nemo itaque modi quisquam, saepe exercitationem quo eum sint voluptate quidem totam veritatis distinctio illum fuga veniam rem aliquid ipsum ducimus? Cumque provident assumenda, dolorum maiores vel natus optio, maxime, facilis molestiae tenetur placeat quibusdam aliquam. Molestias cum, aspernatur impedit eaque consectetur recusandae. Earum esse, suscipit veniam quasi maiores non! Impedit necessitatibus commodi ut cum asperiores eius architecto earum aliquid, a repellendus! Amet, illum totam perferendis quas nobis debitis vitae voluptatem sed sint quae. Accusantium eum aperiam commodi magni alias aspernatur. Itaque tenetur rerum recusandae aperiam, ipsa perferendis assumenda, nesciunt veniam dolor nulla architecto eligendi soluta eaque est illo et veritatis placeat id tempora alias, quaerat ut corporis. Quibusdam nostrum doloremque alias, quo ea eum veniam ex ipsum, sapiente voluptate minima natus ut consequuntur officiis amet minus! Blanditiis, officia asperiores. Quas blanditiis ut neque provident doloremque sunt rerum tempore. Magni laudantium asperiores necessitatibus ea rem commodi blanditiis eum hic, maiores quisquam! Voluptatibus qui id aut? Atque eius odio natus maiores cumque nisi voluptatem reiciendis eum commodi hic ipsa unde eos provident iure esse dicta blanditiis iusto aliquam consequuntur, dolore accusantium? Odio consequatur qui, expedita asperiores sapiente blanditiis delectus nesciunt mollitia perferendis sit ab eligendi hic deleniti vitae cumque alias ullam aperiam beatae nihil et provident quibusdam optio ratione illum. Animi, dolor atque. Sapiente, ad cum sed amet repellat explicabo eum quis molestiae, ipsam vel assumenda necessitatibus fugiat numquam non ea! Eveniet, debitis? Perspiciatis, dolorem consectetur repudiandae totam modi voluptatibus soluta nihil doloremque numquam dolores, hic atque magnam enim quia error! Exercitationem soluta corrupti fugit, sapiente et doloribus sint labore veritatis natus totam aliquid? Fuga ab eius dolorem odio itaque vero omnis, aliquam tenetur ducimus? Iusto aliquid repellat possimus nam tempore quam aut optio fugit. Non quia libero ex voluptas expedita culpa consectetur debitis, asperiores sunt, reiciendis fugit ab explicabo alias tempore cumque, obcaecati aspernatur quasi. Incidunt, architecto, modi perferendis eligendi reiciendis a est ipsum quo reprehenderit natus, distinctio exercitationem quis. Magni rem quo tempora, laudantium fuga dolor nobis deserunt tenetur fugiat dolore enim, in sit ratione excepturi voluptatem soluta similique, tempore odit voluptatum omnis cumque? Laborum obcaecati id, suscipit delectus pariatur dolorum quia laudantium in qui beatae inventore voluptate voluptatibus, dignissimos nostrum! Dolorem quas esse iure modi. Odio, sed distinctio. Delectus harum repudiandae, accusantium minus reiciendis magni hic iste ipsam culpa in neque, sequi qui optio dolores voluptatum. Provident fugit eos modi blanditiis error? Cumque, eveniet maiores? Debitis, itaque doloribus ipsam vel ratione, amet facere maiores laborum fuga quaerat vero doloremque? Fuga aperiam quis rem cupiditate perferendis repellat non assumenda itaque deleniti, veniam alias, cumque sequi aut delectus eum soluta! Laudantium sequi vitae repudiandae fugiat quae tempore magni dignissimos harum doloribus!
                        </p>
                        <img src="" alt="" />
                    </article>
                    <div className="most-recent">
                        <h3>MOST RECENT</h3>
                        <div className="body-recent">
                            <SingleRecent />
                        </div>
                    </div>
                </div>
                <div className="line-title">
                    <h3>Other Article</h3>
                    <hr />
                </div>
                <div className="other-article-wrapper">
                    <SingleOtherArticle />
                </div>
            </div>
        </section>
    )
}

export default NewsDetail

