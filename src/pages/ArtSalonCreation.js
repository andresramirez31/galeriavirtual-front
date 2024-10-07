import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArtSalonCreation = () => {
    
    const [nombreSalon, setNombreSalon] = useState('');
    const [descSalon, setDescSalon] = useState('');
    const [fechaExh, setFechaExh] = useState(null);
    const navigate = useNavigate();

    
    //Manejo de guardado de variables del formulario
    
    const handleDateChange = (e) => {
        const ValorFecha = e.target.value; // Toma fecha como string
        setFechaExh(new Date(ValorFecha)); //Convierte string a objeto Fecha
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Prueba simulada, ajustar API
        console.log('Guardando Salon con datos:', nombreSalon, descSalon, fechaExh);
        
        
        navigate('/');
      };
    
    return(
    
    <div>
        <h2>Creación del salón</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='NombreSalon'>Nombre del salon: </label>
            <input 
                type="text"
                id="NombreSalon" 
                value={nombreSalon}
                placeholder="Ingrese el nombre del salon" 
                onChange={(e) => setNombreSalon(e.target.value)} 
                required 
            />
            </div>
            <div>
            <label htmlFor='DescSalon'>Descripcion del salon: </label>
            <input 
                type="text"
                id="DescSalon" 
                value={descSalon}
                placeholder="Ingrese descripcion del salon" 
                onChange={(e) => setDescSalon(e.target.value)} 
                required 
            />
            </div>
            <div>
            <label htmlFor='fechaExh'>Fecha de la exhibicion: </label>
            <input 
                type="date"
                id="fechaExh" 
                placeholder="Ajustar fecha exhibicion" 
                onChange={handleDateChange}  
            />

            <p>Selected Date: {fechaExh ? fechaExh.toLocaleDateString() : 'No date selected'}</p>

            </div>
            <button type="submit">Guardar Salon</button>
        </form>
    </div>

    );
}

export default ArtSalonCreation;