import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { useRole } from '../context/role_context';

const NavigationBar = () => {
  const { role, logout } = useRole();
  

  const handleLogout = () => {
    logout();
    alert('Sesión cerrada exitosamente'); // Optional feedback
  };

  if (!role){
    return (
      <nav>
        <ul className='menuItems'>
          <li><Link to="/" className='customLink'>Inicio</Link></li>
          <li><Link  to="/signup" className='customLink'>Regístrate</Link></li>
          <li><Link to="/login" className='customLink'>Inicia sesión</Link></li>
          <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
          <li><Link to="/gallery" className='customLink'>Galería</Link></li>
        </ul>
      </nav>  
    );
  }

  switch(role.role){
    case "visitante":
      return (
        <nav>
          <ul className='menuItems'>
            <li><Link to="/" className='customLink'>Inicio</Link></li>
            <li><button onClick={handleLogout} className='customLink'>Cerrar sesion</button></li>
            <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
            <li><Link to="/gallery" className='customLink'>Galería</Link></li>
          </ul>
        </nav>  
      );

    case "admin":
      return (
        <nav>
          <ul className='menuItems'>
            <li><Link to="/" className='customLink'>Inicio</Link></li>
            <li><Link onClick={handleLogout} className='customLink'>Cerrar sesion</Link></li>
            <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
            <li><Link to="/gallery" className='customLink'>Galería</Link></li>
          </ul>
        </nav>   
      );

    case "evaluador":
      return (
        <nav>
          <ul className='menuItems'>
            <li><Link to="/" className='customLink'>Inicio</Link></li>
            <li><button onClick={handleLogout} className='customLink'>Cerrar sesion</button></li>
            <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
            <li><Link to="/gallery" className='customLink'>Galería</Link></li>
          </ul>
        </nav>   
      );
    
    default:
      return (
        <nav>
          <ul className='menuItems'>
            <li><Link to="/" className='customLink'>Inicio</Link></li>
            <li><Link  to="/signup" className='customLink'>Regístrate</Link></li>
            <li><Link to="/login" className='customLink'>Inicia sesión</Link></li>
            <li><Link  to="/SalonAccess"className='customLink'>Entra a una sala</Link></li>
            <li><Link to="/gallery" className='customLink'>Galería</Link></li>
          </ul>
        </nav>  
      );

  }
  
  
};

export default NavigationBar;
