import React from 'react';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import shape from '../../img/shape.png';
import Frontenddeveloper from '../../img/Frontenddeveloper.png';
import yellowblobshape from '../../img/yellowblobshape.png';
import './Firstsec.css';
import thumbup from '../../img/thumbup.png';
import node from '../../img/node.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext, useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';




const Firstsec = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration : 6 ,type : 'spring'}

    const [text, setText] = useState("");
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState( Math.random() * 100);
    const toRotate = ["توسعه دهنده", "طراح وبسایت", "برنامه نویس"];
    const switchSpeed = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, typeSpeed);
    
        return () => {
          clearInterval(ticker);
        };
      });
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setTypeSpeed((prevSpeed) => prevSpeed / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setTypeSpeed(switchSpeed);
        } else if (isDeleting && updatedText === "" ) {
          setIsDeleting(false);
          setLoopNum(loopNum +1);
          setTypeSpeed(switchSpeed);
        }
      };



    return (
        <div className='first-sec'>
            <div className='f-right'>
                <img src={shape} alt="" />
                <img src={yellowblobshape} alt="" />
                <img src={Frontenddeveloper} alt="" />
                <motion.img
                    whileInView={{ transform: 'translatex(2rem) scale(0.6)' }}


                    transition={transition}
                    src={node} alt="" />
                <motion.div

                    initial={{ transform: 'translatex(20rem)' }}
                    whileInView={{ transform: 'translatex(5rem)' }}
                    transition={transition}

                    className='sir'>
                    <FloatingDiv image={crown} txt1='طراح' txt2='وبسایت' />
                </motion.div>
                <motion.div
                    whileInView={{ transform: 'translatex(3.5rem)' }}
                    transition={transition}
                    whileHover={{ transform: 'translatex(-3.5rem)' }}
                    className='sir2'>
                    <FloatingDiv image={thumbup} txt1='طراحی خلاقانه' txt2='همواره پیشرو' />
                </motion.div>
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}>

                </div>
                <div className="blur" style={{ background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
            <div className='f-left'>
                <div className='f-left-name'>
                    <span  style={{
                        background: darkMode ? 'black' : '',
                        color: darkMode ? 'white' : ''
                    }}>سلام</span>
                    <span style={{
                        background: darkMode ? 'black' : ''
                        
                    }}>من یک  {text} </span>
                    <span style={{
                        background: darkMode ? 'black' : '',
                        color: darkMode ? 'white' : ''
                    }}>وب هستم</span>

                    <span
                        style={{
                            background: darkMode ? 'black' : '',
                            color: darkMode ? 'white' : ''
                        }}>
                        برنامه نویسی تحت وب انجام میدم
                        طراحی وبسایت و اپلیکیشن
                    </span>

                    <button className="button f-button">
                        شروع همکاری
                    </button>

                    <div className="f-icons">
<a href='https://github.com/Mehrdad-Mh'>

                        <img src={github}  alt="" />
</a>

                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstsec
