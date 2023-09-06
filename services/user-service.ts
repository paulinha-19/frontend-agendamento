import axios from 'axios';
import { SignUpForm } from '../types/z-infer';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;

export const registerUser = async (userData: SignUpForm) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
