import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar';
import '../css/pages/NotFound.css';

export default function NotFound({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("notFound");
  }, [])
  
  return (
    <div className="container">
      <div className='notfound-container'>
        <h1 className='notfound-title'>404</h1>
        <h2 className='notfound-subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className='notfound-link'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
  )
}
