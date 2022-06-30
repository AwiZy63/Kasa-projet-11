import React from 'react'
import { Link } from 'react-router-dom';
import '../css/components/HomeCard.css';

export default function HomeCard({ location }) {
  return (
    <article style={{backgroundImage: `url('${location.cover}')`}} className='card'>
      <Link className='card-link' to={`/location/${location.id}`}>
        <p className="card-title">{location.title}</p>
      </Link>
    </article>
    )
}
