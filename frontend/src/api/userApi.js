import axios from 'axios';
import { getToken, isTokenExpired } from '../utils/token';

const userApi = axios.create({
    baseURL: import.meta.env.VITE_KEY_USERS,
});

userApi.interceptors.request.use((config) => {
    let token = getToken();

    if (token && isTokenExpired(token)) {
        localStorage.removeItem('token');
        token = null;
    }

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

export default userApi;
