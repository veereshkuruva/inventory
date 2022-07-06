import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import data from './Data.json'
const Inoventary = () => {
  const [details, setDetails] = useState(data)

  const updateHandle=()=>{
    console.log(details)
  }
  const clickHandler=()=>{
    console.log(details)
  }
  return (

    <div className='conatiner' style={{background:"lightblue",color:"white"}} >
      <h2 style={{color:"black"}}>products</h2><br />
      <input type='search' placeholder='search' />
      <button onClick={clickHandler}>click</button>
      <div>
      <button type="button" class="btn btn-secondary" style={{marginRight:"1200px"}}>NewProduct</button>
      </div>
     
      <div className='main-container' style={{ background:"orange",marginTop: "60px", color:"white"}}>

        <Table  style={{border:"2px solid black"}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>categery</th>
              <th>stock</th>
              <th>Price</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>

            {details.map((ele) => (


              <tr>
                <td>{ele.id}</td>
                <td>{ele.Name}</td>
                <td>{ele.Description}</td>
                <td>{ele.category}</td>
                <td>{ele.stock}</td>
                <td>{ele.price}</td>
                <td><button style={{background:"green",color:"white"}} onClick={updateHandle}>update</button> </td>
              </tr>
            ))}
          </tbody>

        </Table>





      </div>
    </div>
  )
}

export default Inoventary