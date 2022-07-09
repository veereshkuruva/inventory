import React from 'react'

const Navbar = () => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/inoventary">Inoventery</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/todo1">Todo1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/comments">Comments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/food">Food</a>
        </li>
       
      
       
        
        <li class="nav-item dropdown">
         
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <div class="d-flex" >
      <li class="nav-item">
      <button  class="btn btn-primary"  href="/loginup">Login</button>
        </li>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar