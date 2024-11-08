import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = (username, password, role) => {
  return axios.post(`${API_URL}/auth/login`, { username, password,role });
};

export const register = (username, password, role) => {
  return axios.post(`${API_URL}/auth/register`, { username, password, role });
};


export const getAdminData = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/admin`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};