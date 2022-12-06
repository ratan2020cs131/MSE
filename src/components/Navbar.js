import React from 'react';
import {Link} from 'react-router-dom'
// import {user11} from './Login'
import './css/navbar.css';

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand text-white mx-5" href="/">MSE</a> */}
          <img src="Logo192.png" alt="MSE" className="logo"></img>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li className="nav-item">
                <Link className="nav-link active text-white mx-2" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" href="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/login">Login</Link>
              </li>  
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white mx-5" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Options
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="/">Chat</a></li>
                  <li><a className="dropdown-item text-white" href="/">History</a></li>
                  <li><hr className="dropdown-divider text-white" /></li>
                  <li><a className="dropdown-item text-white" href="/">Get Help</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
