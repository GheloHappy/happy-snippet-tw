import axios from 'axios';
import cookies from 'react-cookies';
import { jwtDecode } from 'jwt-decode'
import refreshToken from './refreshToken';

const setupAxiosInterceptors = async () => {
    //console.log('initial')
    //   axios.interceptors.request.use(async (config) => {
    //     let token = cookies.load('_hs');
    //     if (token) {
    //       const decoded = jwtDecode(token);
    //       const exp = decoded.exp * 1000;
    //       const now = Date.now();
    //       if (exp - now < 5 * 60 * 1000) { // Less than 5 minutes
    //         token = await refreshToken();
    //       }
    //       if (token) {
    //         config.headers['Authorization'] = `Bearer ${token}`;
    //       }
    //     }
    //     return config;
    //   }, (error) => {
    //     return Promise.reject(error);
    //   });

    let token = cookies.load('_hs');
    if (token) {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000;
        const now = Date.now();
        if (exp - now < 5 * 60 * 1000) { // Less than 5 minutes
            token = await refreshToken();
        }
    }
    return token;
};

export default setupAxiosInterceptors;