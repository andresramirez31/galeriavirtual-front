import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul className='menuItems'>
        <li><Link to="/" className='customLink'>Inicio</Link></li>
        <li><Link  to="/signup" className='customLink'>Regístrate</Link></li>
        <li><Link to="/login" className='customLink'>Inicia sesión</Link></li>
        <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
      </ul>
    </nav>  
  );
};

export default NavigationBar;