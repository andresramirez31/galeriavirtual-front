import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/auth';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data; // Para devoluciones de token
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};


export const register = async (regisForm) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, regisForm);
    return response.data; // Para devolución de respuesta de guardado
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};