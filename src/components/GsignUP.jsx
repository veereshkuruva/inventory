import React, { useState } from 'react'
import "./GsignUP.css"
const GsignUP = () => {
    const [formData,setFormData] =useState({
        name:"",
        Email:"",
        password:""
    })
    const changeHandle=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const clickHandler=()=>{
        setFormData(formData)
        console.log(formData) 
    }
  return (
  
    <div className='container'>

           <div className='formdata'> 
           <label>Name :</label><br/>
           <input type='text' name='Email' placeholder='Enter your email'  onChange={changeHandle}/>
            </div>
       
   
    <div >
        <label>Email :</label><br/>
        <input type='Email' name='Email' placeholder='Enter your email'  onChange={changeHandle}/>
    </div><br/>
   
       <div >
        <label>password :</label>
        <input type='password'  name='password' placeholder='Enter your password'  onChange={changeHandle}/>
    </div><br/>
  <button onClick={clickHandler}  class="btn btn-primary">Sumbit</button>
   
          </div>
      
    
  )
}

export default GsignUP