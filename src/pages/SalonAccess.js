import '../styles/SalonAccess.css';
import '../styles/main.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/role_context';
import { useNavigate } from 'react-router-dom';

const SalonAccess = () => {
    const [salonName, setSalonName] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [currentMembers, setCurrentMembers] = useState(['Usuario1','Usuario2','Usuario3']);
    const [isFull, setIsFull] = useState(false);
    const { role } = useRole();
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de obtención de datos del salón
        setSalonName('Salón proyectos Integradores');
        setMaxMembers(20);
        setIsFull(false);
        console.log("Miembros", currentMembers);
    }, [currentMembers]);

    const handleUsers = (event) => {
        event.preventDefault();
        setCurrentMembers((prevCurrentMembers) => [...prevCurrentMembers, "NuevoUsuario"]);
        console.log("Miembros", currentMembers);
        setTimeout(() => {
            navigate('/Gallery');
        }, 100);
        
    };

    if (!role){
        return (
            <div>
                <h2>Acceso a Salon</h2>
                <div className="SalonBox">
                    <h3 className="SalonText">{salonName}</h3>    
                    <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                    <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                    {isFull ? (
                        <p className="SalonText">El salon esta lleno</p>
                    ) : (
                        <p className="SalonText">El salon no esta lleno</p>
                    )}
                    <div>
                        <Link onClick={handleUsers} to="/Gallery">    
                        <button  className="btn_event">Ingresar al salón</button>
                        </Link>

    
                        <Link to="/">
                        <button className="btn_event">Regresar al inicio</button>
                        </Link>
    
                        
    
    
                    </div>
                </div>
            </div>
        );;
      }
    
      switch(role.role){
        case "visitante":
        case "evaluador":
            return (
                <div>
                    <h2>Acceso a Salon</h2>
                    <div className="SalonBox">
                        <h3 className="SalonText">{salonName}</h3>    
                        <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                        <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                        {isFull ? (
                            <p className="SalonText">El salon esta lleno</p>
                        ) : (
                            <p className="SalonText">El salon no esta lleno</p>
                        )}
                        <div>
                            <Link onClick={handleUsers} to="/Gallery">    
                            <button className="btn_event">Ingresar al salón</button>
                            </Link>
        
                            <Link to="/">
                            <button className="btn_event">Regresar al inicio</button>
                            </Link>
        
                        </div>
                    </div>
                </div>
            );
    
        case "admin":
          return (
            <div>
                <h2>Acceso a Salon</h2>
                <div className="SalonBox">
                    <h3 className="SalonText">{salonName}</h3>    
                    <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                    <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                    {isFull ? (
                        <p className="SalonText">El salon esta lleno</p>
                    ) : (
                        <p className="SalonText">El salon no esta lleno</p>
                    )}
                    <div>

                        <Link onClick={handleUsers} to="/Gallery">    
                        <button className="btn_event">Ingresar al salón</button>
                        </Link>
    
                        <Link to="/SalonPick">
                        <button className="btn_event">Modificar Salón</button>
                        </Link>
    
                        <Link to="/">
                        <button className="btn_event">Regresar al inicio</button>
                        </Link>
    
                        
    
    
                    </div>
                </div>
            </div>
        );
       
        
        default:
            return (
                <div>
                    <h2>Acceso a Salon</h2>
                    <div className="SalonBox">
                        <h3 className="SalonText">{salonName}</h3>    
                        <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                        <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                        {isFull ? (
                            <p className="SalonText">El salon esta lleno</p>
                        ) : (
                            <p className="SalonText">El salon no esta lleno</p>
                        )}
                        <div>
                            <Link onClick={handleUsers} to="/Gallery">    
                            <button className="btn_event">Ingresar al salón</button>
                            </Link>
        
                            <Link to="/">
                            <button className="btn_event">Regresar al inicio</button>
                            </Link>

        
                        </div>
                    </div>
                </div>
            );;
    
      }

}


export default SalonAccess;