import axios from "axios";

const API_URL = "http://127.0.0.1:8000/authentication"; // Django backend URL

export const signup = async (userData) => {
  return await axios.post(`${API_URL}/authentication/signup/`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/authentication/login/`, userData);
};

export const logout = async () => {
  return await axios.post(`${API_URL}/authentication/logout/`);
};
