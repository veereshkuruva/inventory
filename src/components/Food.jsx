import axios from 'axios';
import React, { useState } from 'react'


const Food = () => {
    // const YOUR_APP_ID = "ade4cc9b";
    // const YOUR_APP_KEY = "180eac9d210f4fa4f4b6979ea0e949bc"	;

    const [search, setSearch] = useState("")
    const[data,setData] =useState([]);
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    const clickHandler = (e) => {
        // console.log(search)
        e.preventDefault();
         axios.get(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(response=> {
         console.log(response.data)        
 }).catch(err=>{
    console.log(err)
 })
    }
  const res=Array.isArray(data)
//   console.log(res)
    return (
        <div className='App'>
            <center>
            <h1 style={{ color: "green" }}>Food Receipe</h1>
            <input type='text' placeholder="Item Name" value={search} onChange={changeHandler} />
            <button onClick={clickHandler}>search</button><br/>
            
            <div>
              {
                data.map(ele=><li>{ele.Title}</li>)
              }
            </div>
           
          
           
            </center>
        </div>

    )
}

export default Food