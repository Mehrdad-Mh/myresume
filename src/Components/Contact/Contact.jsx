import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from 'react';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
    const transition = { duration: 7, type: 'spring' }
    const form = useRef();

    const [done ,setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_910mqx8', 'template_zhobq8a', form.current, 'jiKgzXamXSt-Zb9Nn')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{background : darkMode? 'black' : '' ,
             color : darkMode? 'white' : ''}}>با من در تماس باشید</span>
                    <span>منتظرتونم</span>
                    <div
                    className='blur c-blur2' style={{background : "#abf1ff94"}}
                    ></div>
                </div>
            </div>
            <div className="c-right">
               
               <form ref={form} onSubmit={sendEmail} >
                <motion.input
                initial={{ transform: 'translatex(-5rem)' }}
                whileInView={{ transform: 'translatex(0rem)' }}
                transition={transition}
                
                type="text" name="user-name" className='user' placeholder='name' />
                <motion.input
                  initial={{ transform: 'translatex(5rem)' }}
                  whileInView={{ transform: 'translatex(0rem)' }}
                  transition={transition}
                
                type="text" name="user-email" className='user' placeholder='email' />
                <motion.textarea
                
                initial={{ transform: 'translatey(5rem)' }}
                  whileInView={{ transform: 'translatey(0rem)' }}
                  transition={transition}
                name="message" className='user' placeholder='message' />
                <input type="submit" value="send" className='button' />
                 <span>{done && "پیام شما با موفقیت ارسال شد"}</span>
                <div
                 className='blur c-blur1' style={{background : 'var(--purple)'}}></div>
               </form>

            </div>
        </div>
     );
}
 
export default Contact
