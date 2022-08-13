import React from 'react';
import './Portfolio.css'
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import temp4 from '../../img/temp4.jpg'
import temp5 from '../../img/temp5.jpg'
import temp6 from '../../img/temp6.jpg'
import temp2 from '../../img/temp2.jpg'
import temp7 from '../../img/temp7.jpg'
import temp8 from '../../img/temp8.jpg'
import temp9 from '../../img/temp9.jpg'
import temp3 from '../../img/temp3.jpg'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 7, type: 'spring' }


 



    return(
<motion.div
 initial={{ transform: 'translatex(3.5rem)' }}
 whileInView={{ transform: 'translatex(0rem)' }}
 transition={transition}
className="portfolio" id='Portfolio'>
<span style={{background : darkMode? 'black' : '' ,
             color : darkMode? 'white' : ''}}>پروژه های اخیر</span>
<span>پرتفولیو</span>






<Swiper

loop={true}
autoplay={{delay :5000 , disableOnInteraction: false }}
pagination={{clickable : true}}
navigation={true}

spaceBetween={25}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'
>
    <SwiperSlide >
        <img src={temp2} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={temp4} alt="" />
    </SwiperSlide>
    <SwiperSlide> 
    <img src={temp5} alt="" />
  </SwiperSlide>
  <SwiperSlide>  
  <img src={temp6} alt="" />
  </SwiperSlide>
  <SwiperSlide>  
  <img src={temp7} alt="" />
  </SwiperSlide>
  <SwiperSlide>  
  <img src={temp8} alt="" />
  </SwiperSlide>
  <SwiperSlide>  
  <img src={temp9} alt="" />
  </SwiperSlide>
  <SwiperSlide>  
  <img src={temp3} alt="" />
  </SwiperSlide>
</Swiper>
</motion.div>
    );
}

export default Portfolio