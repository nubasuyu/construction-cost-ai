import axios from "axios";

const API = "http://localhost:5000/api";

export const predictCost = (data) =>
  axios.post(`${API}/predict`, data);

export const saveProject = (data) =>
  axios.post(`${API}/projects`, data);

export const getProjects = () =>
  axios.get(`${API}/projects`);