import React from 'react'
import './Cstyle.css'
import Cimg from '../../Assets/cimage.webp'
import  Form  from './Form'


const Contact = () => {

  return (
    <>
    <section className='contact section flex-row'id='Contact'>
      
       <h3 style={{marginBottom:"2rem"}}>
        Don't be shy! Hit me up!
       </h3>

       
       <div className='contact-container flex-row'>
        <div className='left-row'>
        <div>
        <img src={Cimg} loading='lazy' alt="img"/>
        </div>
        
        <div className='left-down'style={{marginBottom:"10px"}}> 
            <h3 style={{fontSize: "20px", color: "red",marginTop:"10px"}}>Ifeoma Obodozie</h3>
            <p style={{fontSize: "16px", fontStyle:"italic"}}>Front-end Developer</p>
            </div> 
            <p style={{fontSize: "14px"}}>I am an individual with positive energy and can do spirit.
              Why not contact me!!
            </p>


        <div className='contact-links flex-row'>
        <a href='tel:+2347033827430'>
        <i class="fa-solid fa-phone"></i>
        </a>

        <a href="mailto:ifeoma.jib@gmail.com" target="_blank">
        <i class="fa-solid fa-envelope"></i>
        </a>
        </div>

        </div>

        <div className='right-row'>
            <Form/>

        </div>
       </div>
      
    </section>
 
    </>
  )
}

export default Contact