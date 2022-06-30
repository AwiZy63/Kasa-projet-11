import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate
} from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import data from './data/data.json';
import LocationPage from './pages/LocationPage';

export default function AppRouter() {
    const [currentPage, setCurrentPage] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setLocations(data);
    }, [])

    return (
        <Router>
            <div className='page-wrapper'>
                <NavBar currentLocation={currentPage} />
                <Switch>
                    <Route exact path="/" element={<HomePage locations={locations} setCurrentPage={setCurrentPage} />} />
                    <Route exact path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
                    <Route exact path="/location/:id" element={<LocationPage locations={locations} setCurrentPage={setCurrentPage} />} />
                    <Route exact path="/404" element={<NotFound setCurrentPage={setCurrentPage} />} />
                    <Route path="*" element={<Navigate to={"/404"} replace />} />
                </Switch>
            </div>
        </Router>
    )
}
