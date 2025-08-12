import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import './Cstyle.css'
import Validation from './Validation'

const Form = () => {
  const [values, setValues] = useState({
    name:"",
    email:"",
    message:""
})
const [error, setError] =useState({})
const [success, setSuccess] =useState("")

const handleInput =(e)=>{
    setValues({...values, [e.target.name]:e.target.value})
    setError({...error, [e.target.name] :""})  //Clears erros when user types
}


const handleSend =(e)=>{
    e.preventDefault();
    const validationErrors =  Validation(values);
    setError(validationErrors);

   
    if(Object.keys(validationErrors).length === 0){
      emailjs.send(
        'service_ej0flyn',           // your service ID
        'template_nva4owd',        // your client template ID
        values,
        'KYMZjeKp9HyjmZrm9'            // your EmailJS public key
      );


        setSuccess(`Hi ${values.name}, Your message has been sent successfully`);

        setValues({name:"",
        email:"",
        message:""});

        setTimeout (()=>{
          setSuccess ("")
        },1000)
    }

    else{
        

          setSuccess(" ");
    }
}
  return (
    <form >
      

    <div>
    <input type='text' name='name'
    placeholder='Your Name' value={values.name}
    onChange={handleInput}/>
     {
        error.name && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.name}</p> 
      }
      </div>

    
    

    <div>
    <input type='email'placeholder='Email' 
    name='email'value={values.email}
    onChange={handleInput}/>
      {
        error.email && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.email}</p> 
      }
     
    </div>
    
    <textarea  rows="8" placeholder="Send Your Message"
    name='message' value={values.message}
    onChange={handleInput}></textarea>
     {
        error.message && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.message}</p> 
      }
          
          {
        success && <p style={{color:"green",fontSize:"13px", marginBottom:"4px"}}>{success}</p>
      } 
 
     <button onClick={handleSend}>SUBMIT</button>
    </form>
  )
}

export default Form