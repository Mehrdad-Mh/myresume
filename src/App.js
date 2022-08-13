import './App.css'
import Experience from './Components/Experience/Experience';
import Firstsec from './Components/Firstsec/Firstsec';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import SwiperCore, { Autoplay } from 'swiper';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';


function  App() {
   SwiperCore.use([Autoplay]);
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
    return ( 
      <div className="App"
    style={{background : darkMode? 'black' : '' ,
  color : darkMode? 'white' : ''}}
    >
     
         
           <Navbar/>
           
           <Firstsec/>
           <Services/>
           <Experience/>
           <Works/>
           <Portfolio/>
           <Testimonial/>
           <Contact/>
           <Footer/>
         
        </div>
     );
}

 
export default App ;