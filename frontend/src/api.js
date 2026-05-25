import axios from "axios";

// Use your actual backend Render URL
const API = "https://construction-cost-ai-backend.onrender.com/api";

export const predictCost = (data) =>
  axios.post(`${API}/predict`, data);

export const saveProject = (data) =>
  axios.post(`${API}/projects`, data);

export const getProjects = () =>
  axios.get(`${API}/projects`);