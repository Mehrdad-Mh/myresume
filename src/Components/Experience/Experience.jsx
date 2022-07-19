import React from 'react';
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration : 6 ,type : 'spring'};
    const transition1 = {duration : 8 ,type : 'spring'};
    const transition2 = {duration : 10 ,type : 'spring'};
    return (
     
        <div className="experience" id='Experience' >
            <motion.div
            
                 initial={{opacity : 0}}
                 whileInView = {{ opacity: 1}}
                 transition = {transition}
                
            
            className="achievement">
                <div className="circle" style={{
             color : darkMode? 'black' : ''}} >
                    +8
                </div>
                <span>سال </span>
                <span>تجربه</span>
            </motion.div>

            <motion.div 
             initial={{opacity : 0}}
             whileInView = {{ opacity: 1}}
             transition = {transition1}
          
            className="achievement">
                <div className="circle" style={{
             color : darkMode? 'black' : ''}}>
                    +5
                </div>
                <span>شرکت  </span>
                <span>برتر </span>
            </motion.div>

            <motion.div
             initial={{opacity : 0}}
             whileInView = {{ opacity: 1}}
            
             transition = {transition2}
            className="achievement">
                <div className="circle" style={{
             color : darkMode? 'black' : ''}}>
                    +10
                </div>
                <span>پروژه </span>
                <span>در حال کار</span>
            </motion.div>

        </div>
    )
}

export default Experience