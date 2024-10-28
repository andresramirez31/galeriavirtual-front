import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/';


export const saveObra = async (form) => {
    try {
      const response = await axios.post(`${BASE_URL}/obra`, form);
      return response.data; // Devolucion de guardado
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };