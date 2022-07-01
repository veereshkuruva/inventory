import React,{useState} from 'react'
import "./Login.css"
const LoginUP = () => {
    const [data,setData] =useState({
      
        Email:"",
        password:""
    })
    const changeHandle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const clickHandler=()=>{
        setData(data)
        console.log(data)
    }
  return (
    <div>
         <div >
                <label>Email :</label>
                <input type='Email' name='Email' placeholder='Enter your email'  onChange={changeHandle}/>
            </div><br/>
           
            <div >
                <label>password :</label>
                <input type='password'  name='password' placeholder='Enter your password'  onChange={changeHandle}/>
            </div><br/>
          <button onClick={clickHandler}>Sumbit</button>
           
          </div>
 
  )
}

export default LoginUP;