import api from "./api";

export const login = async (formData) => api
    .post("users/login", formData)
    .then(res => res.data);

export const register = (formData) => api
    .post("users/register", formData)
    .then(res => res.data);

export const getProfile = () => api
    .get("users/profile")
    .then(res => res.data);

export const refreshAuth = (requestData) => api
    .post("users/refresh-tokens", requestData)
    .then(res => res.data.tokens);

export const logout = (requestData) => api
    .post("users/logout", requestData);
