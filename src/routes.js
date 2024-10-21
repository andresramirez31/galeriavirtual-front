import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import ArtSalonCreation from './pages/ArtSalonCreation';
import Login from './pages/Login';
import SalonPick from './pages/SalonPick';
import SalonAccess from './pages/SalonAccess';
import SalonHolder from './pages/SalonHolder';
import ExhibitionRoom from './pages/ExhibitionRoom'; 
import Gallery from './pages/Gallery'; 



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createGallery" element={<ArtSalonCreation />} />
            <Route path='/SalonPick' element={<SalonPick />} />
            <Route path='/SalonAccess' element={<SalonAccess />} />
            <Route path='/SalonHolder' element={<SalonHolder />} />
            <Route path="/gallery" element={<Gallery />} /> 

        </Routes>
    );
};

export default AppRoutes;
