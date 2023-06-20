import '../CSS/recommendSection.css'
import r_img_1 from '../assets/img/r_img_1.jpg';
import r_img_2 from '../assets/img/r_img_2.jpg';
import r_img_3 from '../assets/img/r_img_3.jpg';
import r_img_4 from '../assets/img/r_img_4.jpg';
import p_img_1 from '../assets/img/p_img_1.jpg';
import p_img_2 from '../assets/img/p_img_2.jpg';
import { Pagination } from 'swiper';
import { useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper stylesn
import 'swiper/css';
import 'swiper/css/pagination';

const RecommendSection = ()=>{
    let [numberOfRecommendation, setRecommendation]=useState(2);
    setInterval(() => {
        let width=window.screen.width;

        if(width<500){
             setRecommendation(1);
        }
        else{
            setRecommendation(2);
        }
    }, 500);
    return (
        <div className='recommendSection'>

            <div className='main-section'>

                 <div className='details'>
                 <Swiper className="container places_container"
                modules={[Pagination]} 
                spaceBetween={40}
                slidesPerView={numberOfRecommendation}
                pagination={{ clickable: true }}
                >
                    <SwiperSlide className="place">
                        <div className="place-img">
                        <img src={p_img_1} alt="place to visit" />
                        </div>
                       <div className='place-info'>
                       <h4 className='place-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4> 
                        <small className="place-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
                            odio possimus! Quas sint dignissimos distinctio
                        </small>
                       </div>
                       <div className='btn'>
                       <button className='place_btn'> GET MORE INFO...</button>
                       </div>
                    </SwiperSlide>

                    <SwiperSlide className="place" >
                        <div className="place-img">
                        <img src={p_img_2} alt="place to visit" />
                        </div>
                        <div className='place-info'>
                       <h4 className='place-title2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4> 
                        <small className="place-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
                            odio possimus! Quas sint dignissimos distinctio
                        </small>
                       </div>
                       <div className='btn'>
                       <button className='place_btn'> VIEW DETAIL...</button>
                       </div>
                      
                    </SwiperSlide>


                    <SwiperSlide className="place">
                        <div className="place-img">
                            <img src={p_img_1} alt="place to visit" />
                        </div>
                        <div className='place-info'>
                       <h4 className='place-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4> 
                        <small className="place-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
                            odio possimus! Quas sint dignissimos distinctio
                        </small>
                       </div>
                       <div className='btn'>
                       <button className='place_btn'> GET MORE INFO...</button>
                       </div>
                       
                    </SwiperSlide>

                    <SwiperSlide className="place">
                        <div className="place-img">
                        <img src={p_img_2} alt="place to visit" />
                        </div>
                        <div className='place-info'>
                       <h4 className='place-title2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4> 
                        <small className="place-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
                            odio possimus! Quas sint dignissimos distinctio
                        </small>
                       </div>
                       <div className='btn'>
                       <button className='place_btn'> VIEW DETAIL...</button>
                       </div>
                    </SwiperSlide>

                 </Swiper>

                </div>
                <div className='recommendPlace'>

                    <header className='recommend-header'>
                        <div>Recommended Places</div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </header>

                    <div className='recommend'>

                        <section>
                            <img src={r_img_1} alt="" />
                            <h5>EUROPE</h5>
                        </section>
                        <section>
                            <img src={r_img_2} alt="" />
                            <h5>ASIA</h5>
                        </section>
                        <section>
                            <img src={r_img_3} alt="" />
                            <h5>AFRICA</h5>
                        </section>
                        <section>
                            <img src={r_img_4} alt="" />
                            <h5>SOUTH AMERICA</h5>
                        </section>

                    </div>
                    
                </div>


            </div>
                 

        </div>
    )
}
export default RecommendSection;