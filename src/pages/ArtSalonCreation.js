import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArtSalonCreation.css';
import '../styles/main.css';

const ArtSalonCreation = () => {

    // Manejo de variables de la pagina
    
    const [nombre, setNombre] = useState('');
    const [descSalon, setDescSalon] = useState('');
    const [fechaVigencia, setFechaVigencia] = useState(null);
    const [sponsor, setSponsor] = useState('');
    const navigate = useNavigate();
    

    
    //Manejo de guardado de variables del formulario

    
    
    const handleDateChange = (e) => {
        const ValorFecha = e.target.value; // Toma fecha como string
        setFechaVigencia(new Date(ValorFecha)); //Convierte string a objeto Fecha
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8080/api/salon', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({nombre, descSalon, fechaVigencia, sponsor}),
        });

        console.log(JSON.stringify({nombre, descSalon, fechaVigencia, sponsor}))
        
        if(response.ok){
          alert('Creación de salón exitosa');    
        } else {
          alert('Creación fallida');
        }
        
        
        navigate('/SalonPick');
      };
    
    return(
    
    <div>
        <h2>CREACIÓN DEL SALÓN</h2>
        <div className='Box'>
            
            <form onSubmit={handleSubmit} className='form'>
                
                <div className='column1'>
                    <label htmlFor='NombreSalon' className='label_box'>Nombre del salón:</label>

                    

                </div>

                <div className='column2'>
                    <input 
                        type="text"
                        id="NombreSalon" 
                        value={nombre}
                        className='value_box'
                        placeholder="Ingrese el nombre del salón" 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                    

                </div>

                <div className='column1'>
                    <label htmlFor='DescSalon' className='label_box'>Descripción del salón:</label>

                    
                
                </div>

                <div className='column2'>
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

                <div className='column1'>
                    <label htmlFor='fechaExh' className='label_box'>Fecha de la exhibición:</label>
                </div>

                <div className='column2'>
                    <input 
                        type="date"
                        id="fechaVigencia" 
                        className='value_box'
                        placeholder="Ajustar fecha exhibición" 
                        onChange={handleDateChange}  
                    />
                </div>

                <div className='column1'>
                    <label htmlFor='DescSalon' className='label_box'>Sponsor:</label>

                </div>

                <div className='column2'>

                    
                    <input 
                        type="text"
                        id="DescSalon" 
                        value={sponsor}
                        className='value_box'
                        placeholder="Ingrese descripción del salón" 
                        onChange={(e) => setSponsor(e.target.value)} 
                        required 
                    />
                

                </div>
                
                <button type="submit" className='column2 save_button'>Guardar Salón</button>
            </form>
            
        </div>
    </div>

    );
}

export default ArtSalonCreation;