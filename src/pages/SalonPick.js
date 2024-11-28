import { Link } from 'react-router-dom';
import React from "react";
import '../styles/SalonPick.css';
import { useRole } from '../context/role_context';
import '../styles/main.css';
import GuestLayout from './layouts/guestLayout';

const SalonPick = () => {
    
    const { role } = useRole();
  
    if (!role){
        return <GuestLayout />;
    }

    switch(role.role){
    

        case "admin":
            return (
            
                <div>
                    <h2>MODIFICACIÓN SALÓN GALERÍA VIRTUAL</h2>
                    <div className="SalonBox">
                        
                        <div>
                            <p className="SalonObraText">Bienvenido/a Usuario</p>
                        </div>
                        
                        <div>
                            <Link to="/ObrasForm">
                            <button id="BtnAñadirObra" className="btn_event">Añadir obra</button>
                            </Link>
        
                            <Link to="/ObrasForm">
                            <button id="BtnEliminarObra" className="btn_event">Eliminar obra</button>
                            </Link>
                            
                            <Link to="/Signup">
                            <button id="BtnAñadirExpositor" className="btn_event">Añadir expositor</button>
                            </Link>
                        </div>
        
                    </div>
                </div>
            );


        case "expositor":
            return (
            
                <div>
                    <h2>MODIFICACIÓN SALÓN GALERÍA VIRTUAL</h2>
                    <div className="SalonBox">
                        
                        <div>
                            <p className="SalonObraText">Bienvenido/a Usuario</p>
                        </div>
                        
                        <div>
                            <Link to="/ObrasForm">
                            <button id="BtnAñadirObra" className="btn_event">Añadir obra</button>
                            </Link>
        
                            <Link to="/ObrasForm">
                            <button id="BtnEliminarObra" className="btn_event">Eliminar obra</button>
                            </Link>      
                        
                        </div>
        
                    </div>
                </div>
            );
        
        default:
        return <GuestLayout />;

    }
    
    
    
    
}

export default SalonPick;