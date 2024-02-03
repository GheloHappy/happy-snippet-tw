import axios from "axios";

const API_URI = import.meta.env.VITE_API_URI

export const getDate = async (url) => await axios.get(API_URI + url);

export const postData = async (url, data) => await axios.post(API_URI + url, data)