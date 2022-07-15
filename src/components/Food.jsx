import axios from 'axios';
import React, { useState } from 'react'


const Food = () => {
  // const YOUR_APP_ID = "ade4cc9b";
  // const YOUR_APP_KEY = "180eac9d210f4fa4f4b6979ea0e949bc"	;

  const [search, setSearch] = useState("")
  const [movieList, setMovieList] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  const clickHandler = () => {
    setSearch("")
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(response => {
      setMovieList(response.data.Search)
        console.log(response.data.Search)
    }).catch(err => {
      console.log(err)
    })
  }
const download=(url)=>{
  fetch(url).then(response=>{
    response.arrayBuffer().then(function(buffer){
      const url =window.URL.createObjectURL(new Blob([buffer]));
      const link=document.createElement("a")
      link.href=url;
      link.setAttribute("download","movies.png");
      document.body.appendChild(link)
      link.click()
    })
  }).catch(err=>{
    console.log(err)
  })
};
  return (
    <div className='App'>
      <center>
        <div> 
        <h1 style={{ color: "green" }}>Favourite movies</h1>
        <input type='text' placeholder="Movie Name" style={{ color: "black" }}value={search} onChange={changeHandler} />
        <button onClick={clickHandler}>search</button><br/> 
        </div>
        <div className='row'style={{ marginTop: "50px" }}> 
          {
           
            movieList.map(movie =>
              <div className='col-md-3'>
              <div class="card" style={{ "width": "10rem" }}>
                <img src={movie.Poster} class="card-img-top" alt={movie.Title} />
                <div class="card-body">
                  <h4 className="card-title" key={movie.id}>{movie.Title}</h4>
                  <a  className='btn btn-primary' onClick={()=>download(movie.Poster)} >Download poster</a>
                </div>
              </div>
              </div>
          )};
      </div>
      </center>
    </div>

  )
}

export default Food