import Password from 'antd/lib/input/Password'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    const [state,setState] =useState({
        name:"",
        Email:"",
        Password:""
})
const changeHandler=(event)=>{
    setState({...state,[event.target.name]:event.target.value})
}
const clickHandler=()=>{
    alert("succesfully")
}
  return (
    
    <div style={{marginTop:"100px"}}>
           <center>
            <h2 style={{color:"orange"}}>Signup</h2>
         <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" name='name' id="staticEmail" placeholder="Enter your name" onChange={changeHandler}/>
    </div>
  </div> 
  


  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" name='Email' id="staticEmail" placeholder='Enter Email'onChange={changeHandler}/>
    </div>
    </div>

  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"  name='password'placeholder='Enter password'onChange={changeHandler}/>
    </div>
  </div>





  <button type="button" class="btn btn-primary" onClick={clickHandler}>sumbit</button>
        
       
         </center>
    </div>
  )
}

export default Home