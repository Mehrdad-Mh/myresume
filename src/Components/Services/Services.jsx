import React from 'react';
import './Services.css'
import ls from '../../img/ls.png'
import front from '../../img/front.png'
import stack from '../../img/stack.png'
import Card from './../Card/Card';
import Resume from '../../img/Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 7, type: 'spring' }
    return (
        <div className="services" id='Services' style={{
            background: darkMode ? 'black' : '',
            color: darkMode ? 'white' : ''
        }}>
            <div className="awesome" >
                <motion.span
                    initial={{ transform: 'translatex(3.5rem)' }}
                    whileInView={{ transform: 'translatex(0rem)' }}

                    transition={transition}

                    style={{
                        background: darkMode ? 'black' : '',
                        color: darkMode ? 'white' : ''
                    }}>کاری که میتونم براتون انجام</motion.span>
                <motion.span
                    initial={{ transform: 'translatex(-6rem)' }}
                    whileInView={{ transform: 'translatex(0rem)' }}
                    transition={transition}
                >شامل :</motion.span>


                <span style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''}}>
                     <TypeAnimation
                     cursor={true}
                     sequence={[' طراحی وبسایت بر پایه react و استایل دهی با بروزترین کتابخانه ها', 7000,'']}
                     wrapper="h1"
                     repeat = {Infinity}
      
                     />
                     <TypeAnimation
                     cursor={true}
                     sequence={['(antd , materialdesign ) و همراهی شما تارسیدن به هدف', 10000, '']}
                     wrapper="p"
                     repeat = {Infinity}
      
                     />

                       



                </span>



                <a href={Resume}>
                    <button className="button s-button">Download CV</button>
                </a>
                <motion.div
                
                initial={{transform : 'translatex(1rem)'}}
whileInView = {{transform : 'translatex(21rem)'}}

transition = {transition}
                
                className="blur s-blur" style={{ background: '#a8f1ff94' }}></motion.div>
            </div>

            <div className="Cards">

                <motion.div

                    initial={{ transform: 'translatex(3.5rem)' }}
                    whileInView={{ transform: 'translatex(0rem)' }}
                    transition={transition}

                    style={{ top: '-8rem', left: '15rem' }}>
                    <Card
                        emoji={ls}
                        heading={'طراحی'}
                        detail={'HTML5, CSS3'}
                    />


                </motion.div>

                <div style={{ top: '-5rem', left: '-6rem' }}>
                    <Card
                        emoji={front}
                        heading={'پیاده سازی'}
                        detail={"javascript , react,express  "}

                    />
                </div>

                <motion.div
                initial={{transform : 'translatey(0rem)'}}
                whileInView = {{transform : 'translatey(-6rem) '}}
                
                transition = {transition}
                
                style={{ top: '8rem', left: '90px' }}>
                    <Card 
                        emoji={stack}
                        heading={'تبلیغات'}
                        detail={" g-ads  ,  seo ,  net-ads  ,  git  "}

                    />
                </motion.div>

                <motion.div
                initial={{transform : 'translatex(3.5rem)'}}
                whileInView = {{transform : 'translatex(-30rem)'}}
                
                transition = {transition}
                className="blur s-blur2" style={{ background: 'var()--purple' }} ></motion.div>

            </div>

        </div>
    );
}

export default Services;