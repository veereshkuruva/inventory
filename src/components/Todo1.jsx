import React,{useState} from 'react'

const Todo1 = () => {
    const [state,setState] =useState("")

     const[list,setList]=useState([])

    const [edit,setEdit] =useState(true)

    const changeHandler =(e)=>{
        setState(e.target.value)
    }
    const clickHa=()=>{
     
      if(!state){   // if nothing in input not add

      }else{
        const newList=[...list,state]
        setList(newList)
        setState("");
      } 
     
     
    }
    const deletehandler=(id)=>{
      const newDel=list.filter((ele,index)=>index!==id)
      setList(newDel)
    }

    const editHandle=(id)=>{
      const newEdit=list.find((ele)=>ele==id);
       
      setEdit(newEdit)
      setState(newEdit.name)
   

    }
   
  return (
    <> 
    <div>
        <center><h2>Todo App</h2></center>
        <input type ='text' name='state' value={state} onChange={changeHandler}/>
        {
          edit? <button onClick={clickHa}>Sumbit</button>: <button onClick={editHandle}>Edit</button>
        }
       
    </div>
    <div>
    {list.map((ele,index)=>
         <li key={index}>{ele} <button onClick={()=>editHandle(index,ele.value)}>Edit</button> <button onClick={()=>deletehandler(index)}>Delete</button></li>
        )}
    
    </div>
    </>
  )
}

export default Todo1

//{list.map((ele,index,array)=>
//<li>{ele} <button onClic={()=>deleteHandler(index)}>delete</button></li>
//)}
//const delete=()=>{
  //const newvar =[...list,state] 
  //setList(newvar)
  //setState("")
//}
//
//
//


