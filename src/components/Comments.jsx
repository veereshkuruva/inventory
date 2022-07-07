import React, { useState } from 'react'

const Comments = () => {
    const [text, setText] = useState("")
    const changeHandler = (e) => {
        setText(e.target.value)
    }
   
    const clickHandler = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const clickHandler2 = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const clickClearHandler2 = () => {
       
        setText("")
    }
    return ( 
    <>
    

        <div>
            <div class="mb-3">
                <h2 style={{color:"orange"}}>Text Analyzer</h2>
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" placeholder='Enter the text' value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="10" style={{ width: '900px', height: "200px", border: "2px solid black" }}></textarea>
            </div>
            <button type="button" class="btn btn-primary mx-1" onClick={clickHandler} style={{ marginRight: "800px", marginTop: "20px" }}>Convert to UpperCase</button>
            <button type="button" class="btn btn-success mx-1" onClick={clickHandler2} style={{ marginRight: "800px", marginTop: "20px" }}>Convert to LowerCase</button>
            <button type="button" class="btn btn-info mx-1" onClick={clickClearHandler2} style={{ marginRight: "900px", marginTop: "20px" }}>ClearText</button>
        </div>
        <div className='container my-3'>
            <h2 style={{fontFamily:"Times New Roman Times, serif",background:"pink"}}>Text summary</h2>
            <p style={{border:" 1px sloid black"}}>{text.split("").length} words {text.length} charactres</p>
            <p>{0.003 *text.split("").length } Mins read</p>
            <h3  style={{fontFamily:"Times New Roman Times, serif",background:"lightgreen"}} >Preview</h3>
            <p>{text}</p>

        </div>
        </>
    )
}

export default Comments;