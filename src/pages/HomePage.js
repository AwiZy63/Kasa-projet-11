import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';
import '../css/pages/HomePage.css';

export default function HomePage({ setCurrentPage, locations }) {
  useEffect(() => {
    setCurrentPage("accueil");
  }, [])

  return (<>
    <div className="container">
      <div className='header-home-card'>
        <h2 className='header-home-card-title'>Chez vous, partout et ailleurs</h2>
      </div>
      <section className="location-section">
        {locations.map((location, key) => {
          return <HomeCard key={key} location={location} />
        })}
      </section>
    </div>
    <Footer />
  </>)
}
