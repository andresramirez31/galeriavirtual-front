import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArtSalonCreation.css';
import '../styles/main.css';

const ArtSalonCreation = () => {

    // Manejo de variables de la pagina
    
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
        console.log('Guardando Salón con datos:', nombreSalon, descSalon, fechaExh);
        
        
        navigate('/SalonPick');
      };
    
    return(
    
    <div>
        <h2>CREACIÓN DEL SALÓN</h2>
        <div className='Box'>
            
            <form onSubmit={handleSubmit} className='form'>
                
                <div className='column1'>
                    <label htmlFor='NombreSalon' className='label_box'>Nombre del salón:  </label>

                    <input 
                        type="text"
                        id="NombreSalon" 
                        value={nombreSalon}
                        className='value_box'
                        placeholder="Ingrese el nombre del salón" 
                        onChange={(e) => setNombreSalon(e.target.value)} 
                        required 
                    />

                </div>

                <div className='column2'>
                    <label htmlFor='fechaExh' className='label_box'>Fecha de la exhibición:   </label>

                </div>

                <div className='column1'>
                    <label htmlFor='DescSalon' className='label_box'>Descripción del salón:   </label>

                    <input 
                        type="text"
                        id="DescSalon" 
                        value={descSalon}
                        className='value_box'
                        placeholder="Ingrese descripción del salón" 
                        onChange={(e) => setDescSalon(e.target.value)} 
                        required 
                    />
                
                </div>

                <div className='column2'>
                    <input 
                        type="date"
                        id="fechaExh" 
                        className='value_box'
                        placeholder="Ajustar fecha exhibición" 
                        onChange={handleDateChange}  
                    />
                </div>

                <div className='column1'>
                    <p>Fecha seleccionada:</p>
                </div>

                <div className='column2'>
                    <p>{fechaExh ? fechaExh.toLocaleDateString() : 'No date selected'}</p>
                </div>
                
                <button type="submit" className='column1 save_button'>Guardar Salón</button>
            </form>
            
        </div>
    </div>

    );
}

export default ArtSalonCreation;