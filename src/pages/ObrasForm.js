import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const ObrasForm = () => { 
    
    const[projectName, setProjectName] = useState("");
    const[authorName, setAuthorName] = useState("");
    const[file, setFile] = useState("");
    const[desc, setDesc] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8080/Api/projectForm', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({projectName, authorName, desc, file}),
        });
        
        if(response.ok){
          alert('Creación de proyecto exitosa');    
        } else {
          alert('Creación fallida');
        }
        
        navigate('/');
    };

    return (
        <div>
          <h2>Formulario para obras</h2>
          <div className='Box'>
            <form className='form' onSubmit={handleSubmit}>
              
              <div>
                <label className="label_box_login" htmlFor='username'>Nombre de la obra:</label>
                <input 
                  type="text"
                  id="name" 
                  className='value_box'
                  value={projectName} 
                  onChange={(e) => setProjectName(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label className="label_box_login" htmlFor='password'>Nombre del autor de la obra:</label>
                <input 
                  type="password"
                  id="password"
                  className='value_box' 
                  value={authorName} 
                  onChange={(e) => setAuthorName(e.target.value)} 
                  required 
                />
              </div>
    
              <div>
                <label className="label_box_login" htmlFor='password'>Descripción de la obra:</label>
                <input 
                  type="password"
                  id="password"
                  className='value_box' 
                  value={desc} 
                  onChange={(e) => setDesc(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label className="label_box_login" htmlFor='password'>Carga de archivo de la obra:</label>
                <input 
                  type="password"
                  id="password"
                  className='value_box' 
                  value={file} 
                  onChange={(e) => setFile(e.target.value)} 
                  required 
                />
              </div>

              <button type="submit" className='save_button'>Guardar obra</button>
            </form>
          </div>
        </div>
      );
    
}

export default ObrasForm;
