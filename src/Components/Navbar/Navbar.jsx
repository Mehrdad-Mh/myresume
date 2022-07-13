import React from "react";
import './Navbar.css'


const Navbar = () => {
    return ( 
        <div className="nav-1" id="Navbar">
           <div className="n-left">
             <div className="n-l-name">
                پرتفولیو من
             </div>
           </div>
           <span>toggle</span>
           <div className="n-right">
             <div className="n-menu">
                <ul>
                    <li>صفحه اصلی</li>
                    <li>مهارت ها</li>
                    <li>تجربیات</li>
                    <li>نظرات </li>
                    <li>ارتباط با من</li>
                </ul>

             </div>

             <button className='button n-button'>
                    تماس با من
             </button>

           </div>
        </div>
     );
}
 
export default Navbar;
