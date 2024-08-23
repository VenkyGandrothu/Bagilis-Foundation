import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/Home.css'
import Index from '../components/Index'
import Aboutus from '../components/Aboutus'
import RuralEmployment from '../components/RuralEmployment'
import SocialActivities from '../components/SocialActivities'
import Gallery from '../components/Gallery'
import Footer from  '../components/Footer'
import Contactus from '../components/Contactus'


function Home() {
  return (
    <div className='Body'>
     <Navbar/>
     <div id="index">
     <Index/>
     </div>
     <div id="aboutus">
     <Aboutus/>
     </div> 
     <div id="ruralemployment">
     <RuralEmployment/>
     </div> 
     <div id="socialactivities">
     <SocialActivities/>
     </div> 
     <div id="gallery">
     <Gallery/>
     </div> 
     <div id="contactus">
     <Contactus/>
     </div>
    <Footer/>
    </div>
  )
}

export default Home