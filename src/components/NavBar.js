import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/NavBar.css'
import logo from '../assets/logo.svg'

export default function NavBar({ currentLocation }) {
    return (
        <div className="container">
            <nav className='navbar'>
                <Link to={"/"}><img className='navbar-logo' src={logo} alt='Navbar logo' /></Link>
                <div className='navbar-links'>
                    <Link to={"/"} className={`navbar-link ${currentLocation && currentLocation === 'accueil' ? 'active' : null}`}>ACCUEIL</Link>
                    <Link to={"/about"} className={`navbar-link ${currentLocation && currentLocation === 'apropos' ? 'active' : null}`}>A PROPOS</Link>
                </div>
            </nav>
        </div>
    )
}
