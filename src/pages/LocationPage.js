import React, { useEffect, useState } from 'react'
import data from '../data/data.json';
import { useParams } from 'react-router-dom'
import LocationTag from '../components/LocationTag';
import '../css/pages/LocationPage.css'
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { Navigate } from "react-router-dom";
import Gallery from '../components/Gallery';

export default function LocationPage({ setCurrentPage, locations }) {
    const { id } = useParams();
    const [location, setLocation] = useState([]);

    useEffect(() => {
        setCurrentPage("accueil");

        if (locations) {
            setLocation(locations.filter((location) => location.id === id)[0]);
        }

    }, [locations, id]);

    console.log();

    if (data.filter((location) => location.id === id).length <= 0) {
        return <Navigate to={"/404"} replace />
    }
    

    if (!location || !location.title) {
        return (<><pre>Chargement..</pre></>)
    } else {
        return (<>
            <div className="container">
                <Gallery pictures={location.pictures} />
                <div className="location-informations-container">
                    <div className="location-informations-wrapper-1">
                        <h1 className="location-title">{location.title}</h1>
                        <h2 className="location-location">{location.location.split("-").reverse().toString().replace(",", ", ")}</h2>
                        <div className="location-tags">
                            {location.tags.map((tag, key) => {
                                return <LocationTag key={key} tag={tag} />
                            })}
                        </div>
                    </div>
                    <div className="location-informations-wrapper-2">
                        <div className={`location-stars ${location.rating === "1" ? "one" : location.rating === "2" ? "two" : location.rating === "3" ? "three" : location.rating === "4" ? "four" : location.rating === "5" ? "five" : null}`}>
                            <i className="fa-solid fa-star location-star"></i>
                            <i className="fa-solid fa-star location-star"></i>
                            <i className="fa-solid fa-star location-star"></i>
                            <i className="fa-solid fa-star location-star"></i>
                            <i className="fa-solid fa-star location-star"></i>
                        </div>
                        <div className="location-user-profile">
                            <p className='location-user-name'>{location.host.name.split(" ")[0]}<br />{location.host.name.split(" ")[1]}</p>
                            <img className='location-user-picture' src={location.host.picture} alt="" />
                        </div>
                    </div>
                </div>
                <section className="location-desc">
                    <AboutSection type={"text"} data={{ header: "Description", text: location.description }} />
                    <AboutSection type={"list"} data={{ header: "Équipements", equipments: location.equipments }} />
                </section>
            </div>
            <Footer />
        </>)
    }
}
