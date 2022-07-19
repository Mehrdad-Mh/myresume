import React from 'react';
import './Testimonial.css'
import { Swiper,SwiperSlide } from 'swiper/react';
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import profile5 from '../../img/profile5.jpg'
import profile6 from '../../img/profile6.jpg'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Testimonial = () =>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients =[
         {
            img : profile1 ,
            
            review : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد' 
            },
        
            {
                img : profile2,
                review :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
            },
            {
                img : profile3,
                review : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
            },

            {
                img : profile4,
                review : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'

            },

            {
                img : profile5 , 
                review : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
            },

            {
                img : profile6,
                review : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
            }

        ];

    return(
       
<div className="t-wrapper">
    <div className="t-heading">
        <span>
نظرات مشتریان <br/>
            </span>
        <span>
راجب رضایتشون<br/>
            </span>
            <span>برای من!!!</span>
            <div className="blur t-blur1" style={{background : 'var()--purple'}} ></div>
            <div className="blur t-blur2" style={{background : 'skyblue'}} ></div>
    </div>

     <Swiper
     modules={[Pagination]}
     slidesPerView = {1}
     pagination = {{ clickable : 'true' }}
     >
        {clients.map( (clients,index)=>{
return(
<SwiperSlide key={index}>
    <div className="testimonial" id='Testimonial'>

    <img src={clients.img} alt="" />
    <span  style={{background : darkMode? 'black' : '' ,
             color : darkMode? 'white' : ''}}>{clients.review}</span>
    </div>
</SwiperSlide>
);
        })};
     </Swiper>

</div>
    );
}

export default Testimonial