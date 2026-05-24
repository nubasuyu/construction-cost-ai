import axios from "axios";

const API = Process.env.REACT_APP_API_URL;

export const predictCost = (data) =>
  axios.post(`${API}/predict`, data);

export const saveProject = (data) =>
  axios.post(`${API}/projects`, data);

export const getProjects = () =>
  axios.get(`${API}/projects`);