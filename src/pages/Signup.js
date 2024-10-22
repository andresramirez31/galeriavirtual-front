import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prueba simulada, ajustar API
    console.log('Signing up with', email, username, password, confirmPassword);
    
    
    navigate('/');
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      <div className='LoginBox'>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label className="label_box_login" htmlFor='email'>Correo Electrónico:</label>
            <input 
              type="email"
              id="email"
              className='value_box' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="label_box_login" htmlFor='username'>Usuario:</label>
            <input 
              type="text"
              id="username" 
              className='value_box'
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
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