import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import '../styles/Login.css';
import '../styles/obrasForm.css';

const ObrasForm = () => { 
    
    const[nombre, setNombre] = useState("");
    const[exponente, setExponente] = useState("");
    const[medioAudiovisual, setMedioAudiovisual] = useState("");
    const[palabrasClave, setPalabrasClave] = useState([]);
    const[inputPalabra, setInputPalabra] = useState("");
    const[otros, setOtros] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();
    const [imageBase64, setImageBase64] = useState("");

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onloadend = () => {
        setImageBase64(reader.result.split(",")[1]); // Remove data prefix
      };

      if (file) {
        reader.readAsDataURL(file); // Convert to base64 string
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const response = await fetch('http://localhost:8080/api/obras', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({nombre, medioAudiovisual, descripcion, exponente, palabrasClave, otros, imageBase64}),
        });

        console.log(JSON.stringify({nombre, medioAudiovisual, descripcion, exponente, palabrasClave, otros}))
        
        if(response.ok){
          alert('Creación de proyecto exitosa');    
        } else {
          alert('Creación fallida');
        }
        
        navigate('/');
    };

    const handleAddItem = () => {
      if (inputPalabra.trim()) {  // Check for non-empty input
        setPalabrasClave((prevPalabrasClave) => [...prevPalabrasClave, inputPalabra]);
        setInputPalabra('');  // Clear the input after adding
      }
    };

    return (
        <div>
          <h2>Formulario para obras</h2>
          <div className='ObrasBox'>
            <form className='form' onSubmit={handleSubmit}>
              
              <div className='column1'>
                <label className="label_box_login" htmlFor='projectName'>Nombre de la obra:</label>
                
              </div>
              <div className='column2'>
                <input 
                    type="text"
                    id="projectName" 
                    className='value_box'
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                  />
        
              </div>

              <div className='column1'>
                <label className="label_box_login" htmlFor='projectType'>Medio audiovisual:</label>

              </div>

              <div className='column2'>
                <input 
                  type="text"
                  id="projectType"
                  className='value_box' 
                  value={medioAudiovisual} 
                  onChange={(e) => setMedioAudiovisual(e.target.value)} 
                  required 
                />

              </div>

              <div className='column1'>
                <label className="label_box_login" htmlFor='desc'>Descripción de la obra:</label>
        
              </div>

              <div className='column2'>
                <input 
                    type="text"
                    id="desc"
                    className='value_box' 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    required 
                  />
        
              </div>

              <div className='column1'>
                <label className="label_box_login" htmlFor='authorName'>Nombre del autor de la obra:</label>
        
              </div>

              <div className='column2'>
                <input 
                    type="text"
                    id="authorName"
                    className='value_box' 
                    value={exponente} 
                    onChange={(e) => setExponente(e.target.value)} 
                    required 
                  />
        
              </div>

              <div className='column1'>
                <label className="label_box_login" htmlFor='keywords'>Palabras clave:</label>
        
              </div>

              <div className='column2'>
                <input 
                  type="text"
                  id="keywords"
                  className=' value_box' 
                  value={inputPalabra} 
                  onChange={(e) => setInputPalabra(e.target.value)}  
                />
        
              </div>

              
              <div className='column3'>
                <button className="obras_save_button" onClick={handleAddItem}>Añadir palabras clave:</button>
                
              </div>

              <div className='column1'>
                <label className="label_box_login" htmlFor='other'>Otros:</label>
        
              </div>

              <div className='column2'>
                
                <input 
                  type="text"
                  id="other"
                  className='value_box' 
                  value={otros} 
                  onChange={(e) => setOtros(e.target.value)} 
                  required 
                />
              </div>

            <div className='column1'>
                <label className="label_box_login" htmlFor='Imagen'>Imagen:</label>
             
              </div>

              <div className='column2'>
                <input
                     
                    type="file" 
                    onChange={handleFileChange} 
                    accept="image/*"
                    required
                  />
              </div>

              <button type="submit" className='obras_save_button'>Guardar obra</button>
            </form>
          </div>
        </div>
      );
    
}

export default ObrasForm;
