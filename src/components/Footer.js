import React from 'react'
import '../css/components/Footer.css'
import whiteIcon from '../assets/white_logo.svg'

export default function Footer() {
  return (
    <footer className='footer-container'>
        <img className='footer-image' src={whiteIcon} alt="" />
        <p className="footer-copyrights">&copy; {new Date(Date.now()).getFullYear()} Kasa. All rights reserved</p>
    </footer>
  )
}
