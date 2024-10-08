import React from "react";
import '../styles/SalonPick.css'
import '../styles/main.css'

const SalonPick = () => {
    
    
    return (
        
        <div>
            <h2>ELECCION DE SALON GALERIA VIRTUAL</h2>
            <div className="SalonBox">
                
                <div>
                    <p className="SalonText">Bienvenido/a Usuario</p>
                </div>
                
                <button id="BtnAñadirObra" className="btn_event">Añadir obra</button>
                <button id="BtnEliminarObra" className="btn_event">Eliminar obra</button>
                <button id="BtnAñadirExpositor" className="btn_event">Añadir expositor</button>

            </div>
        </div>
    );
    
}

export default SalonPick;