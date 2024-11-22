import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [rol] = useState('visitante');
  const [estado] = useState('activo');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prueba simulada, ajustar API
    console.log('Signing up with', correo , nombre, password, confirmPassword, rol, estado);

    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({nombre, rol, estado, correo, password}),
    });
    
    if(response.ok){
      alert('Registro exitoso');    
    } else {
      alert('Credenciales invalidas');
    }
    
    
    navigate('/');
  };

  return (
    <div>
      <h2>Registro</h2>
      <div className='LoginBox'>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label className="label_box_login" htmlFor='email'>Correo Electrónico:</label>
            <input 
              type="email"
              id="email"
              className='value_box' 
              value={correo} 
              onChange={(e) => setCorreo(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="label_box_login" htmlFor='username'>Usuario:</label>
            <input 
              type="text"
              id="username" 
              className='value_box'
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="label_box_login" htmlFor='password'>Contraseña:</label>
            <input 
              type="password"
              id="password"
              className='value_box' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="label_box_login" htmlFor='ConfirmPassword'>Confirmar contraseña:</label>
            <input 
              type="password"
              id="ConfirmPassword"
              className='value_box' 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className='save_button'>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;