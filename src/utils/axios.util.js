import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://vast-cyan-hermit-crab-hat.cyclic.app',
})

axiosInstance.interceptors.request.use(
    (request) => {
        let authToken = localStorage.getItem('authToken');
        request.headers['Content-Type'] = 'application/json';
        request.headers['Authorization'] = authToken;
        request.headers['Apollo-Require-Preflight'] = 'true';
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;