import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { useRole } from '../context/role_context';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useRole(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    
    if(response.ok){
      const data = await response.json();
      const token = data.token;

      login(token);

      localStorage.setItem('jwtToken', token);
      alert('Login exitoso'); 
      navigate('/');   
    } else {
      alert('Credenciales invalidas');
    }
    
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      <div className='LoginBox'>
        <form className='form' onSubmit={handleSubmit}>
          
          <div>
            <label className="label_box_login" htmlFor='username'>Correo electronico:</label>
            <input 
              type="email"
              id="username" 
              className='value_box'
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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