import React from 'react'
import './project.css'
import Singlecard  from './Singlecard'
import project3 from '../../Assets/project3.png'
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'
import project4 from '../../Assets/project4.png'

const Projects = () => {
  return (
    <>
      <section className='project section flex-row'id='Projects'>
      <h1>My Works</h1>
      <div className="card-container">
      <div className="cards">
      <Singlecard
           projectName ="Shopping Website" 
           cardImg ={project1}
           stack1 ="HTML" stack2="CSS"  stack3="Js"
           cardDesc="A simple shopping site built using HTML, CSS, and JavaScript.
           Implemented responsive design principles to ensure optimal user experience on various devices. And also 
           utilized local storage to store and retrieve items in the shopping cart. " 
           projectUrl =" https://ifeomablessing.github.io/shoppingcart/"/>

          <Singlecard
          projectName ="Restaurant Website"
          cardImg ={project2}
          stack1 ="HTML" stack2="CSS" stack3="Js"
          cardDesc ="This is a restaurant website built using HTML, CSS, and JavaScript.
          Utilized local storage to store and retrieve items in the user's cart.
          Integrated interactive features, such as menu filtering and dynamic content updates."
          projectUrl ="https://ifeomablessing.github.io/foodweb/"/>

          <Singlecard
          projectName ="Admin Dashboard"
                   cardImg ={project3}
                   cardDesc="The React dashboard offers a comprehensive solution for users, combining functionality and a user-friendly interface.
                    With features like data input, image upload, and local storage, 
                   it provides a practical and personalized experience for efficient data management. "
                   stack1 ="REACT" stack2="CSS"
                   projectUrl ="https://ifeomablessing.github.io/AdminDashboard/"/>

          <Singlecard
          projectName ="Weather App"
          cardImg ={project4}
          stack1 ="HTML" stack2="CSS" stack3="Js" stack4 ="API"
          cardDesc ="This is a simple weather App built using
          HTML, CSS and a weather Api designed to provide users with
          current weather information for locations."
          projectUrl ="https://ifeomablessing.github.io/weatherApp/"/>

         
      
            </div>
            </div>
      </section>
    </>
  )
}

export default Projects