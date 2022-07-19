import './App.css'
import Experience from './Components/Experience/Experience';
import Firstsec from './Components/Firstsec/Firstsec';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import SwiperCore, { Autoplay } from 'swiper';
import Testimonial from './Components/Testimonial/Testimonial';


function  App() {
   SwiperCore.use([Autoplay]);
    return ( 
        <div className="App">
         
           <Navbar/>
           
           <Firstsec/>
           <Services/>
           <Experience/>
           <Works/>
           <Portfolio/>
           <Testimonial/>
         
        </div>
     );
}
 
export default App ;