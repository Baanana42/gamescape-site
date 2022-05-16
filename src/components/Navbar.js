import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-wrap'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href='/'>
                    <img src={"/images/logo.jpg"} alt="logo" className='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to={"/"}><li className="nav-item navibox active">
                            <p className="nav-link navbar-text">HOME</p>
                        </li></Link>
                        <Link to={"/"}><li className="nav-item navibox">
                            <p className="nav-link navbar-text">ANDROID PORTFOLIO</p>
                        </li></Link>
                        <Link to={"/"}><li className="nav-item navibox">
                            <p className="nav-link navbar-text">ABOUT</p>
                        </li></Link>
                        <Link to={"/privacy"}><li className="nav-item navibox">
                            <p className="nav-link navbar-text">PRIVACY</p>
                        </li></Link>
                        <Link to={"/"}><li className="nav-item navibox">
                            <p className="nav-link navbar-text">CONTACT</p>
                        </li></Link>
                        <li className="nav-item">
                            <img src="https://img.icons8.com/ios-filled/30/ffffff/search--v4.png" className='search-logo' alt='search' />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar