import { Link } from 'react-router-dom';
import '../styles/SalonHolder.css';
import '../styles/main.css';
import React, { useState }  from 'react';

const SalonHolder = () => {

    const [obras, setObras] = useState([]);

    return (
        
        <div className='SalonHolder'>
            <h2>Salón Número 1</h2>
            <div className='SalonHolderBox'>
                <h3>Salón ejemplo nombre</h3>
                <p>Bienvenido usuario/a</p>

                <div className='SalonPlaceholder'>

                    <div className='ArtworksGrid'>
                    
                        {/* Plantilla para galeria con obras */}

                        {obras.length === 0 ? (
                            <p>No hay obras disponibles en este momento.</p>
                        ) : (
                            obras.map((obras, index) => (
                                <div key={index} className='ArtworkItem'>
                                    <img src={obras.image} alt={obras.title} />
                                    <p>{obras.title}</p>
                                </div>
                            ))
                        )}
                    </div>

                </div>
                <div>
                    <Link to="/SalonAccess">
                    <button className='btn_event'>Salir del salón</button>
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