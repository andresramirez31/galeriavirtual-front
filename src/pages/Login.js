import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prueba simulada, ajustar API
    console.log('Logging in with', email, username, password);
    
    
    navigate('/');
  };

  return (
    <div>
      <h2>Inicio de sesion</h2>
      <div className='LoginBox'>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label className="label_box_login" htmlFor='email'>Correo Electronico:</label>
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
          <button type="submit" className='save_button'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;