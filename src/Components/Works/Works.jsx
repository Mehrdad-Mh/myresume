import React from 'react';
import './Works.css';
import NewProject from '../../img/NewProject.png'
import node from '../../img/node.png'
import NewProject3 from '../../img/NewProject3.png'
import NewProject1 from '../../img/NewProject1.png'
import NewProject2 from '../../img/NewProject2.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Works = () => {
    const transition = { duration: 7, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
          

            <div className="w-right">
                <motion.div
                whileInView={{transform : 'rotate(360deg)'}}
                transition={transition}
                className="w-mainCircle">
                    <motion.div
                     whileInView={{transform : 'rotate(-360deg)'}}
                     transition={transition}
                    className="w-secCircle">
                        <img src={NewProject} alt="" />
                    </motion.div>

                    <motion.div
                      whileInView={{transform : 'rotate(-360deg)'}}
                      transition={transition}
                    className="w-secCircle">
                        <img src={NewProject3} alt="" />
                    </motion.div>

                    <motion.div
                  
                    className="w-secCircle">
                        <img src={node} alt="" />
                    </motion.div>

                    <motion.div
                      whileInView={{transform : 'rotate(-360deg)'}}
                      transition={transition}
                    className="w-secCircle">
                        <img src={NewProject2} alt="" />
                    </motion.div>
                    <motion.div
                      whileInView={{transform : 'rotate(-360deg)'}}
                      transition={transition}
                    className="w-secCircle">
                        <img src={NewProject1} alt="" />
                    </motion.div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

            <div className="awesome vb" 
           >
                <span  style={{background : darkMode? 'black' : '' ,
             color : darkMode? 'white' : ''}}>اینطوری شمارو به اهدافتون میرسونیم</span>
                <span>بفرمائید :</span>
                <span   style={{background : darkMode? 'black' : '' ,
             color : darkMode? 'white' : ''}}>طراحی وبسایت بر پایه react و js <br />
                    و همراهی شما تا رسیدن به اهدافتون ورضایت از خدمت ارائه شده .<br/>
                    با ارائه برنامه پیشرفت پروژه میتونید در هر زمان <br/>
                    از میزان پیشرفت پروژتون مطلع بشید <br/>
                    و اگر تغیری به ذهنتون رسی میتونید با ما در میون بذارید.

                </span>
                <a>
                    <button className="button s-button">شروع همکاری</button>
                </a>
                <div className="blur s-blur" style={{ background: '#a8f1ff94' }}></div>
            </div>
        </div>

    );
}

export default Works