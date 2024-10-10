import '../styles/SalonAccess.css';
import '../styles/main.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SalonAccess = () => {
    const [salonName, setSalonName] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [currentMembers, setCurrentMembers] = useState([]);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        // Simulación de obtención de datos del salon
        setSalonName('Salon de Ejemplo');
        setMaxMembers(20);
        setCurrentMembers(['Usuario1', 'Usuario2', 'Usuario3']);
        setIsFull(false);
    }, []);

    return (
        <div>
            <h2>Acceso a Salon</h2>
            <div className="SalonBox">
                <h3 className="SalonText">Nombre del Salon: {salonName}</h3>    
                <p className="SalonText">Integrantes máximos: {maxMembers}</p>  
                <p className="SalonText">Integrantes actuales: {currentMembers.length}</p>
                {isFull ? (
                    <p className="SalonText">El salon esta lleno</p>
                ) : (
                    <p className="SalonText">El salon no esta lleno</p>
                )}
                <div>
                    <Link to="/SalonHolder">    
                    <button className="btn_event">Ingresar al salon</button>
                    </Link>

                    <Link to="/">
                    <button className="btn_event">Regresar al inicio</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default SalonAccess;