import React, { useState } from 'react'
import '../css/components/AboutSection.css'
import arrowIcon from '../assets/arrow.svg'

export default function AboutSection({ type, data }) {
  const [isOpen, setIsOpen] = useState(false);


  const listJSX = () => {
    return data.equipments.map((equipment, key) => {
      return <li key={key} className="equipment-list-element">{equipment}</li>
    });
  }
  return (
    <section className='about-section'>
      <div className="about-section-header">
        <p className="about-section-header-title">{data.header}</p>
        <button onClick={() => setIsOpen(!isOpen)} className='about-section-header-open'><img className={`about-section-header-arrow ${isOpen ? "rotated" : null}`} src={arrowIcon} alt="" /></button>
      </div>
      <div className={`about-section-content ${isOpen ? "open" : null}`}>
        {type === "list" ?
          <ul className='equipment-list'>
            {listJSX()}
          </ul>
          :
          <p className="about-section-content-text">{data.text}</p>
        }
      </div>
    </section>
  )
}
