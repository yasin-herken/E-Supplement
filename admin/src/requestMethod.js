import axios from "axios";

const BASE_URL= "http://localhost:5000/api/";

const TOKEN = "Bearer aaa"
export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {authorization: `Bearer ${TOKEN}`}
})