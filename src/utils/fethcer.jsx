import axios from "axios";
import cookies from 'react-cookies'

const API_URI = import.meta.env.VITE_API_URI

let token = cookies.load('_hs')

export const getData = async (url) => {
    if (!token) {
        token = cookies.load('_hs');
    }

    return await axios.get(API_URI + url, token !== null ? { headers: { 'Authorization': token } } : {});
}

export const postData = async (url, data) => {
    if(!token) {
        token = cookies.load('_hs');
    }
    return await axios.post(API_URI + url, data, token !== null ? { headers: { 'Authorization': token } } : {});
}