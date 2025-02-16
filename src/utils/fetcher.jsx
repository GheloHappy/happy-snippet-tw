import axios from "axios";
import cookies from 'react-cookies'

const API_URI = import.meta.env.VITE_API_URI


//old style fetcher
// let token = cookies.load('_hs')

// export const getData = async (url) => {
//     if (!token) {
//         token = cookies.load('_hs');
//     }

//     return await axios.get(API_URI + url, token !== null ? { headers: { 'Authorization': token } } : {});
// }

// export const postData = async (url, data) => {
//     if(!token) {
//         token = cookies.load('_hs');
//     }
//     return await axios.post(API_URI + url, data, token !== null ? { headers: { 'Authorization': token } } : {});
// }



const getToken = () => cookies.load("_hs") || null;

const buildUrlWithParams = (url, params) => {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `${url}?${queryString}` : url;
};

const request = async (method, url, data = {}, params = {}) => {
  const token = getToken();
  const headers = token ? { Authorization: token } : {};
  const fullUrl = buildUrlWithParams(API_URI + url, params);

  return await axios({ method, url: fullUrl, data, headers });
};

export const getData = (url, params = {}) => request("get", url, {}, params);
export const postData = (url, data) => request("post", url, data);
export const patchData = (url, data) => request("patch", url, data);
export const deleteData = (url, params = {}) => request("delete", url, {}, params);