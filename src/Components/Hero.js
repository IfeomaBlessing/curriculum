import React from 'react'
import './Herostyle.css'
 import mypix from '../Assets/mypix.jpg'


const Hero = () => {
  return (
    <>
    <section id='Home'className='hero section'>
  
    <div className='hero-container flex-row'>

         <div className='left-hero'>
          <h1>FRONT-END DEVELOPER</h1>          
           <p>Hi, I'm <span>Ifeoma Obodozie.</span> A passionate and motivated 
            individual seeking position to gain practical experience and contribute 
            to frontend development projects.
           </p>

           
           <a href ="mailto:ifeoma.jib@gmail.com"><button>Hire Me</button></a>

         </div>

         <div className='right-hero flex-row'>
          
          <img src ={mypix}alt='myPicture' loading='lazy'/>
         </div>
 
    </div>

    
    </section>
    </>
  )
}

export default Hero