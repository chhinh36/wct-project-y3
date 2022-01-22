import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { EffectCoverflow, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const DepartmentLabActivity = () => {
    SwiperCore.use([EffectCoverflow,Navigation, Autoplay]);
    return (
        <div className="department-lab-activity en-font">
            <div className="global-wrapper department-lab-activity-wrapper">
                <div className="title">
                    <h2>Student Lab Activity</h2>
                    <div className="underline"></div>
                </div>
                <div className="body-wrapper">
                    <Swiper
                        className="slide-wrapper"
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={15}
                        navigation={true}
                        coverflowEffect={{
                            "rotate": 0,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 4,
                            "slideShadows": true
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                    >
                        <SwiperSlide className="slide">
                            <img src="https://i.pinimg.com/originals/48/75/83/48758395f3e1a3de61049f68b444a0e8.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="https://www.marshfieldlabs.org/imagecatalog/Services/Labs-Services-Overview-Education.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="https://ak.picdn.net/shutterstock/videos/5669114/thumb/1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="https://ak.picdn.net/shutterstock/videos/5669114/thumb/1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="https://chem.uiowa.edu/sites/chem.uiowa.edu/files/styles/home_feature/public/field/image/_DSC1960.jpg?itok=1WonLDzJ" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSiuFGo4bE82vcWGyjhwc4zlmjgIXtkJVgn39Hhe3T0B2PY6CpN7Z1I2xkJGQSm4FIrI&usqp=CAU" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default DepartmentLabActivity
