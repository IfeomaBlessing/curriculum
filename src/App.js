
import './App.css';
import Hero from './Components/Hero';
import Aboutpage from './Components/Aboutpage';
import Contact from './Components/contactpage/Contact';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './Components/Navstyle.css'
import logo from './Assets/lg1.png'
import Projects from './Components/projectpage/Projects';


function App() {
  const getMode =()=>{
    return JSON.parse(localStorage.getItem("mode")) || false
  }

   const [mode, setMode] = useState(getMode());
   const clickMode =()=> {setMode(!mode)}
   
  const [clicked, setClicked] = useState(false);
  const clickMenu =()=> {setClicked(!clicked)}
  
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(mode) )
  }, [mode])

  return (
    <div className={mode ? 'dark-theme' : ' '} >
    
    <header >
       <div className='logo'>
           <img src={logo} alt='logo'/> 
        </div>
        
     <nav>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
       <li>
                    <Link to= "Home" className='navlink'
                    activeClass='activeLink'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100} onClick ={clickMenu} >
                      Home</Link>
                </li>
                       <li>
                    <Link to="About" className='navlink'
                    activeClass='activeLink'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-70} onClick ={clickMenu}>
                      About</Link>
                </li>

                <li>
                    <Link to="Projects" className='navlink'
                    activeClass='activeLink'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-70} onClick ={clickMenu}>
                      Projects</Link>
                </li>

                <li>
                    <Link to="Contact" className='navlink'
                    activeClass='activeLink'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50} onClick ={clickMenu}>
                      Contact</Link>
                </li>

        </ul>

        <div className='n-toggle' onClick={clickMode}>
          <div className={mode ? 'toggle active':'toggle'}><span></span></div>
        </div>

        <div className='Menu' onClick={clickMenu}>
        <i className={clicked ?"fa-solid fa-xmark" :"fa-solid fa-bars"}></i>
        </div>

     </nav>
     </header>
     

      <Hero /> 
      <Aboutpage/> 
      <Projects/>
      <Contact/>
    </div>

  );
}

export default App;
