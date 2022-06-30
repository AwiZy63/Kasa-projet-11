import React from 'react'
import '../css/components/LocationTag.css'

export default function LocationTag({ tag }) {
  return (
    <div className='tag'>
        <p className="tag-text">{tag}</p>
    </div>
  )
}
