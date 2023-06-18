import axios from "axios";

const axiosParams = {
    baseURL: 'http://localhost:3000/api/v1/'
};

const axiosInstance = axios.create(axiosParams);
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

const api = (axiosInstance) => {
    return {
        get: (url, config) => axiosInstance.get(url, config),
        post: (url, body, config) => axiosInstance.post(url, body, config),
        put: (url, body, config) => axiosInstance.put(url, body, config),
        patch: (url, body, config) => axiosInstance.patch(url, body, config),
        delete: (url, config) => axiosInstance.delete(url, config)
    };
};

export default api(axiosInstance);