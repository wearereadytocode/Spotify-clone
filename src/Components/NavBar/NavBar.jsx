import React from 'react'
import './NavBar.css'
import logo from '../../Assets/logo.png'
function NavBar() {
    return (
        <div className="mainnav">
                <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <img className="logo" src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                    <a className="nav-link" href="#">Webplayer</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Premium</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Download</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Support</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Sign up</a>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>

        </div>
    )
}

export default NavBar
