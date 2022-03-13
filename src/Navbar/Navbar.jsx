import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../CounterContext'
import './Navbar.css'


export default function Navbar(props) {
  let { count } = useContext(CounterContext);
  return <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to='/home'>NOXE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {props.userData?  <> <li className="nav-item">
          <Link className="nav-link" to='/home'>Home</Link>
        </li>  
          <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>   
        <li className="nav-item">
          <Link className="nav-link" to='/trending'>Trending</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/movies'>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/search'>Search</Link>
        </li>
        <Link to='/favorite' className="nav-link position-relative">
            Favorite Movies
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {count}
        </span>
      </Link>
        </> : ''}
      </ul>
      {/* -------------------------------------------------------  */}
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item me-3 d-flex align-items-center">
        <a className='link' href="https://www.facebook.com/muhamd.darwesh2015/"><i className='fab mx-2 h3 fa-facebook'></i></a>
        <a className='link' href="https://www.linkedin.com/in/mohameddarwesh/"><i className='fab mx-2 h3 fa-linkedin'></i></a>
        <a className='link' href="https://github.com/Darwesh610/"><i className='fab mx-2 h3 fa-github'></i></a>
        </li>  
          {!props.userData ? <>
            <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>  
          <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
          </li>
          </> : <li className="nav-item">
          <p className="nav-link" onClick={props.logOut} >Log Out</p>
          </li> }
      </ul>
    </div>
  </div>
</nav>
    </div>
  
}
