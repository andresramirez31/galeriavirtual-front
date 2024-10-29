import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    
    if(response.ok){
      alert('Login exitoso');    
    } else {
      alert('Credenciales invalidas');
    }
    
    navigate('/');
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      <div className='LoginBox'>
        <form className='form' onSubmit={handleSubmit}>
          
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