import React, {useState} from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const DepartmentResearch = () => {
    const [indexActive, setIndexActive] = useState(0);
    const handlTitleResearch = (event, index) => {
        setIndexActive(index)
    }
    return (
        <section className="department-research en-font">
            <div className="global-wrapper de-research-wrapper">
                <div className="header">
                    <h2>Research</h2>
                </div>
                <div className="body">

                    {
                        Array.from({length: 6}).map((item, index)=>{
                            return (
                                <div key={index} className={indexActive===index?"single-research active":"single-research"}>
                                    <div className="title-research" onClick={(event)=>handlTitleResearch(event, index)}>
                                        <h3>
                                            <span>Computer Vision</span>
                                            <MdOutlineKeyboardArrowRight className={indexActive===index?"icon-arrow-search active":"icon-arrow-search"} />
                                        </h3>
                                    </div>
                                    <div className="info-wrapper">
                                        <div className="info">
                                           
                                            <p>Real-time Vehicle Classification on Phnom Penh Road in Video Surveillance</p>
                                            <p>Beanbonyka Rim, Sovila Srun , Arnold Williem and Brian C. Lovells</p>
                                            <p>In this work we tackle traffic analysis problems for Phnom Penh roads. Unlike in most developed countries such as Australia and USA, the traffic conditions in developing countries such as Cambodia pose unique challenges. For instance, motorcycles are popular vehicles. This means, during peak hours, where the traffic for cars is congested, the traffic for motorcycles could still be flowing. Thus, any approaches using the whole video to determine the traffic condition are not suitable. To that end, this work provides the first stepping-stone by addressing the Phnom Penh vehicle classification problem. We propose a novel dataset capturing CCTV of Phnom Penh roads in 5 locations from 7am until 5pm in five sunny days. Then, we perform the study by proposing a baseline method comprising three steps: (1) background subtraction; (2) bag-ofword histogram feature extraction; and (3)classification using Support Vector Machine (SVM). Evaluation results show promising results with accuracy 0.76, 0.63 and 0.40 for light, medium and heavy traffic.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="single-research active">
                        <div className="title-research">
                            <h3>Computer Vision</h3>
                        </div>
                        <div className="info-wrapper">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet adipisci delectus. Eum iusto exercitationem unde magni saepe odio neque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet adipisci delectus. Eum iusto exercitationem unde magni saepe odio neque.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non minus et dolorem debitis, quibusdam, cupiditate voluptatem, quod in consectetur illo nemo corrupti id repellendus quaerat repudiandae sequi pariatur aliquam voluptate veniam similique repellat totam! Impedit adipisci laboriosam ad a cumque quae, natus vel! Minima voluptatum illo vero obcaecati rem saepe sit nostrum numquam cumque suscipit reprehenderit minus fugiat qui dolores fugit, quas assumenda recusandae! Quo, optio pariatur sequi error distinctio nostrum maiores. Quo modi ex consectetur dignissimos. Fuga alias modi delectus unde ipsa vero dolor id dicta nesciunt nisi! Itaque necessitatibus atque error quas, enim porro expedita dignissimos suscipit eaque nostrum sapiente est ipsam incidunt eligendi cumque, nihil dolorem repellat facere libero deserunt magnam maxime! Rem temporibus quaerat sunt recusandae, debitis at possimus fugit, autem suscipit, nemo hic! Suscipit ratione nobis hic quo excepturi tenetur consectetur alias ullam sapiente inventore illo temporibus autem, blanditiis quia perspiciatis possimus illum sint architecto iste nulla unde at. Esse pariatur eius eos blanditiis nulla placeat maxime praesentium excepturi sint eveniet facere, quasi quisquam, ipsum, ab libero. Blanditiis sequi rem unde ipsa. Veritatis, porro inventore? Eveniet minima, magni magnam, ipsa ipsum maxime explicabo ex quis, deserunt earum repudiandae ducimus atque dicta? Totam similique maxime atque. At voluptatibus sunt omnis voluptatum consequatur atque quam dolorem exercitationem ad. Vero suscipit quasi itaque et earum quos distinctio beatae repellat, sequi sint neque? Beatae itaque enim, hic consequatur dignissimos in rerum ipsum adipisci unde dolorem nobis! Similique voluptate sequi modi magnam ea nesciunt eum quod deserunt? Consectetur, repudiandae mollitia hic eligendi recusandae maxime fugit voluptatum dignissimos nemo, quisquam deleniti omnis ipsa cupiditate fugiat vero quibusdam a aperiam cum id. Odit aspernatur eius animi, rerum in ratione eos, quis ex velit aliquid veritatis dolor explicabo totam officiis a, voluptatum ducimus perferendis id aperiam optio facere ipsum iusto. Iure, accusantium inventore!</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default DepartmentResearch
