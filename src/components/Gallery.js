import React, { useState } from 'react'
import '../css/components/Gallery.css'

export default function Gallery({ pictures }) {
    const [locationImageIndex, setLocationImageIndex] = useState(0);

    const changePicture = (action) => {
        if (action === "next") {
            if (!pictures[locationImageIndex + 1]) {
                setLocationImageIndex(0);
            } else {
                const newIndex = locationImageIndex + 1
                setLocationImageIndex(newIndex);
            }
        } else {
            if (!pictures[locationImageIndex - 1]) {
                setLocationImageIndex(pictures.length - 1);
            } else {
                const newIndex = locationImageIndex - 1
                setLocationImageIndex(newIndex);
            }
        }
    }
    return (
        <div style={{ backgroundImage: `url('${pictures[locationImageIndex]}')` }} className="header-location-card">
            {pictures && pictures.length > 1 ? (
                <button onClick={() => changePicture("previous")} className='image-handler-button previous-handler-button' type='button'><i className='fa-solid fa-angle-left previous-arrow-icon'></i></button>,
                <button onClick={() => changePicture("next")} className='image-handler-button next-handler-button' type='button'><i className='fa-solid fa-angle-right next-arrow-icon'></i></button>)
                : null}
        </div>
    )
}
