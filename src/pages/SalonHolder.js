import { Link } from 'react-router-dom';
import '../styles/SalonHolder.css';
import '../styles/main.css';
import React from 'react';

const SalonHolder = () => {
    return (
        
        <div className='SalonHolder'>
            <h2>Salon Holder</h2>
            <div className='SalonHolderBox'>
                <h3>Salon ejemplo nombre</h3>
                <p>Bienvenido usuario/a</p>
                <div>
                    <Link to="/SalonAccess">
                    <button className='btn_event'>Salir del salon</button>
                    </Link>

                    <Link to="/">
                    <button className='btn_event'>Regresar al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SalonHolder;