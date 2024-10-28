import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtSalonCreation from './pages/ArtSalonCreation';
import Login from './pages/Login';
import SalonPick from './pages/SalonPick';
import SalonAccess from './pages/SalonAccess';
import SalonHolder from './pages/SalonHolder';
import Signup from './pages/Signup';
import ObrasForm from './pages/ObrasForm';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createGallery" element={<ArtSalonCreation />} />
            <Route path='/SalonPick' element={<SalonPick />} />
            <Route path='/SalonAccess' element={<SalonAccess />} />
            <Route path='/SalonHolder' element={<SalonHolder />} />
            <Route path='/ObrasForm' element={<ObrasForm />} />
        </Routes>
    );
};

export default AppRoutes;
