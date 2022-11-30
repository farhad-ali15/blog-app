import React from 'react'
import { Link } from 'react-router-dom'







function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/' className="btn btn-outline-success">Home Page</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button></ul>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="btn ">
                  <Link to='/add-blog' className="nav-link active" aria-current="page" >Add Blog</Link>
                </li>
                <li className="btn ">
                  <Link to='/admin' className="nav-link active" aria-current="page" >Admin</Link>
                </li>
                <li className="btn ">
                  <Link to='/register' className="nav-link active" aria-current="page" >Register</Link>
                </li>
                <li className="btn ">
                  <Link to='/counter' className="nav-link active" aria-current="page" >Counter</Link>
                  <Link to='/todos' className="nav-link active" aria-current="page" >Todo List</Link>
                </li>
              
              </ul>
            </div>
          
          </div>
        </nav>
      </div></>
  )
}

export default Header