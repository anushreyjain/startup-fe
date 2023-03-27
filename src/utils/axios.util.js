import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://vast-cyan-hermit-crab-hat.cyclic.app',
  headers: {
    'Content-Type': 'application/json',
    'Apollo-Require-Preflight': 'true',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
  }
})
