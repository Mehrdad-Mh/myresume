import React from "react";
import './Navbar.css'
import Toggle from "../Darkmode/Darkmode";
import {Link} from 'react-scroll'


const Navbar = () => {
  
    return ( 
        <div className="nav-1" id="Navbar">
           <div className="n-left">
             <div className="n-l-name">
                پرتفولیو من
             </div>
           </div>
          <Toggle/>
           <div className="n-right">
             <div className="n-menu">
                <ul>
                  <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'>
                  <li>صفحه اصلی</li>
                  </Link>
                    
                    <Link spy={true} to="Services" smooth={true}>
                    <li>مهارت ها</li>
                    </Link>
                    <Link spy={true} to="Portfolio" smooth={true}>
                    <li> نمونه کار</li>
                    </Link>

                    <Link spy={true} to="Experience" smooth={true}>
                    <li>تجربیات</li>
                    </Link>
                   
                    <Link spy={true} to="Testimonial" smooth={true}>
                    <li>نظرات </li>
                    </Link>
                   
                    <Link spy={true} to="Contact" smooth={true}>
                    <li>ارتباط با من</li>
                    </Link>
                    
                </ul>

             </div>
<Link spy={true} to="Footer" smooth={true}>


             <button className='button n-button'>
                    تماس با من
             </button>
             </Link>
           </div>
        </div>
     );
}
 
export default Navbar;
