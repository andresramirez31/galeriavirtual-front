import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import ArtSalonCreation from './pages/ArtSalonCreation';
import Login from './pages/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createGallery" element={<ArtSalonCreation />} />
        </Routes>
    );
};

export default AppRoutes;
