import { Link } from 'react-router-dom';
import React from "react";
import '../styles/SalonPick.css'
import '../styles/main.css'

const SalonPick = () => {
    
    
    return (
        
        <div>
            <h2>ELECCIÓN DE SALÓN GALERÍA VIRTUAL</h2>
            <div className="SalonBox">
                
                <div>
                    <p className="SalonText">Bienvenido/a Usuario</p>
                </div>
                
                <Link to="/ObrasForm">
                <button id="BtnAñadirObra" className="btn_event">Añadir obra</button>
                </Link>

                <Link to="/ObrasForm">
                <button id="BtnEliminarObra" className="btn_event">Eliminar obra</button>
                </Link>
                
                <Link to="/Login">
                <button id="BtnAñadirExpositor" className="btn_event">Añadir expositor</button>
                </Link>

            </div>
        </div>
    );
    
}

export default SalonPick;