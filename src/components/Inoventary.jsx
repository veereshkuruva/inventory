import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import data from './Data.json'
const Inoventary = () => {
    const[details,setDetails] =useState(data)
  return (
    
         <div className='conatiner' >
           <h2>products</h2><br/>
           <input type='search' placeholder='search'/>
           <button>click</button>
        
      
  <div className='main-container'style={{marginTop:"60px"}}>

    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>supplier</th>
          <th>product Name</th>
          <th>Purchase Price</th>
          <th>sale price</th>
          <th>stock</th>
          <th>per pack</th>
          <th>Total purchase price</th>
          <th>Total sale price</th>
          <th>saleable</th>
          <th>-</th>
        </tr>
      </thead>
       <tbody> 
 
       {details.map((ele)=>(

    
      <tr>
     <td>{ele.id}</td>
      <td>{ele.supplier}</td>
    <td>{ele.productName}</td>
        <td>{ele.puchraseprice}</td>
      <td>{ele.saleprice}</td>
        <td>{ele.stocks}</td>
   <td>{ele.perstock}</td>
    <td>{ele.Totalpucharseprice}</td>
<td>{ele.Totalsaleprice}</td>
<td>{ele.saleable}</td>
<tr/>
))}
       </tbody>
      
    </Table>
  

  

    
         </div>
        </div>
  )
}

export default Inoventary