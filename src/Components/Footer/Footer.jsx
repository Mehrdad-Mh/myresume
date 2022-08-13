import React from 'react'
import './Footer.css'
import TypeAnimation from 'react-type-animation';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {

  

  return (
    <div className='foot'>


            <div className="f-content">
            <TypeAnimation
                     cursor={true}
                     sequence={[' sirmehrdadmailbox@gmail.com ', 25000,'']}
                     wrapper="h1"
                     repeat = {Infinity}
                     
                     />
                <span></span>
                <div className="f-icons">
                    <Insta color='white' size='3rem'/>
                    <Whatsapp color='white' size='3rem'/>
                    <Github color='white' size='3rem'/>
                </div>
            </div>
  

     


    </div>

  )
}

export default Footer