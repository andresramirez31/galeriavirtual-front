import '../styles/SalonAccess.css';
import '../styles/main.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/role_context';
import { useNavigate } from 'react-router-dom';

const SalonAccess = () => {
    const [salonName, setSalonName] = useState('');
    const [maxMembers, setMaxMembers] = useState('20');
    const [isLoading, setIsLoading] = useState(true);
    const [salones, setSalones] = useState([]);
    const [currentMembers, setCurrentMembers] = useState(['Usuario1','Usuario2','Usuario3']);
    const [isFull, setIsFull] = useState(false);
    const [error, setError] = useState(null);
    const { role } = useRole();
    const fecha = new Date();
    const fechaActual = fecha.toISOString();
    const navigate = useNavigate();

    useEffect( () => {
       
        const fetchSalones = async () => {
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:8080/api/salon'); 
                if(!response.ok){
                    throw new Error("Error HTTP")
                }
                const data = await response.json();
                setSalones(data);
            } catch(err){
                console.error('error con la carga de salones', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
            
        }
            
        
        fetchSalones();

    }, [currentMembers]);

     

    const handleUsers = (event) => {
        event.preventDefault();
        setCurrentMembers((prevCurrentMembers) => [...prevCurrentMembers, "NuevoUsuario"]);
        console.log("Miembros", currentMembers);
        setTimeout(() => {
            navigate('/Gallery');
        }, 100);
        
    };

    const firstSalon = salones.length > 0 ? salones[0] : null;
    const date = new Date(firstSalon.fechaVigencia);
    const fechaReal = date.toISOString().split('T')[0];

    if (!role){
        return (
            <div>
                {isLoading && <p>Loading salones...</p>}
                <h2>Acceso a Salon</h2>
                {!isLoading && !error && firstSalon && (
                <div className="SalonBox">
                    <h3 className="SalonText">{salones[0].nombre}</h3>
                    <p className="SalonText"><b>Descripción del salón:</b> {salones[0].descSalon}</p>
                    <p className="SalonText"><b>Fecha de vigencia:</b> {fechaReal}</p>  
                    <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                    <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                    {isFull ? (
                        <p className="SalonText">El salón esta lleno</p>
                    ) : (
                        <p className="SalonText">El salón no esta lleno</p>
                    )}
                    {fechaActual <= salones[0].fechaVigencia ? (
                        <p className="SalonText">El salón esta activo</p>
                    ) : (
                        <p className="SalonText">El salón expiro</p>
                    )}  
                    <div>
                        {fechaActual <= salones[0].fechaVigencia ? (
                           <Link onClick={handleUsers} to="/Gallery">    
                            <button  className="btn_event">Ingresar al salón</button>
                           </Link> 
                        ) : (
                            <p></p>
                        )}  
                        
                        <Link to="/">
                        <button className="btn_event">Regresar al inicio</button>
                        </Link>
    
                    </div>
                </div>
                )}
            </div>
        );;
      }
    
      switch(role.role){
        case "visitante":
        case "evaluador":
            return (
                <div>
                    {isLoading && <p>Loading salones...</p>}
                    <h2>Acceso a Salon</h2>
                    {!isLoading && !error && firstSalon && (
                    <div className="SalonBox">
                        <h3 className="SalonText">{salones[0].nombre}</h3>
                        <p className="SalonText"><b>Descripción del salón:</b> {salones[0].descSalon}</p>
                        <p className="SalonText"><b>Fecha de vigencia:</b> {fechaReal}</p>   
                        <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                        <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                        {isFull ? (
                            <p className="SalonText">El salon esta lleno</p>
                        ) : (
                            <p className="SalonText">El salon no esta lleno</p>
                        )}
                        {fechaActual <= salones[0].fechaVigencia ? (
                            <p className="SalonText">El salón esta activo</p>
                        ) : (
                            <p className="SalonText">El salón expiro</p>
                        )} 
                        <div>
                            {fechaActual <= salones[0].fechaVigencia ? (
                                <Link onClick={handleUsers} to="/Gallery">    
                                 <button  className="btn_event">Ingresar al salón</button>
                                </Link> 
                            ) : (
                                <p></p>
                            )}
        
                            <Link to="/">
                            <button className="btn_event">Regresar al inicio</button>
                            </Link>
        
                        </div>
                    </div>
                    )}
                </div>
            );
    
        case "admin":
        case "expositor":
          return (
            <div>
                {isLoading && <p>Loading salones...</p>}
                <h2>Acceso a Salon</h2>
                {!isLoading && !error && firstSalon && (
                <div className="SalonBox">
                    <h3 className="SalonText">{salones[0].nombre}</h3>
                    <p className="SalonText"><b>Descripción del salón:</b> {salones[0].descSalon}</p>
                    <p className="SalonText"><b>Fecha de vigencia:</b> {fechaReal}</p> 
                    <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p> 
                    <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                    {isFull ? (
                        <p className="SalonText">El salón está lleno</p>
                    ) : (
                        <p className="SalonText">El salón no está lleno</p>
                    )}
                    {fechaActual <= salones[0].fechaVigencia ? (
                        <p className="SalonText">El salón esta activo</p>
                    ) : (
                        <p className="SalonText">El salón expiro</p>
                     )}
                    <div>

                        {fechaActual <= salones[0].fechaVigencia ? (
                           <Link onClick={handleUsers} to="/Gallery">    
                            <button  className="btn_event">Ingresar al salón</button>
                           </Link> 
                        ) : (
                            <p></p>
                        )}
    
                        <Link to="/SalonPick">
                        <button className="btn_event">Modificar Salón</button>
                        </Link>
    
                        <Link to="/">
                        <button className="btn_event">Regresar al inicio</button>
                        </Link>
    
                        
    
    
                    </div>
                </div>
                )}
            </div>
        );
       
        
        default:
            return (
                <div>
                    {isLoading && <p>Loading salones...</p>}
                    <h2>Acceso a Salon</h2>
                    {!isLoading && !error && firstSalon && (
                    <div className="SalonBox">
                        <h3 className="SalonText">{salones[0].nombre}</h3>
                        <p className="SalonText"><b>Descripción del salón:</b> {salones[0].descSalon}</p>
                        <p className="SalonText"><b>Fecha de vigencia:</b> {fechaReal}</p>    
                        <p className="SalonText"><b>Integrantes máximos:</b> {maxMembers}</p>  
                        <p className="SalonText"><b>Integrantes actuales:</b> {currentMembers.length}</p>
                        {isFull ? (
                            <p className="SalonText">El salon esta lleno</p>
                        ) : (
                            <p className="SalonText">El salon no esta lleno</p>
                        )}
                        {fechaActual <= salones[0].fechaVigencia ? (
                            <p className="SalonText">El salón esta activo</p>
                        ) : (
                            <p className="SalonText">El salón expiro</p>
                        )}
                        <div>
                            {fechaActual <= salones[0].fechaVigencia ? (
                                <Link onClick={handleUsers} to="/Gallery">    
                                <button  className="btn_event">Ingresar al salón</button>
                                </Link> 
                            ) : (
                                <p></p>
                            )}
        
                            <Link to="/">
                            <button className="btn_event">Regresar al inicio</button>
                            </Link>

        
                        </div>
                    </div>
                    )}
                </div>
            );;
    
      }

}


export default SalonAccess;