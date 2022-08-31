import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:3000",
});

/*export const login = async (formData) =>
  await HTTP.post("/users/signin", formData);

export const register = async (formData) =>
  await HTTP.post("/users/signup", formData);*/

  export const productList = async (formData) =>
  await HTTP.get("/api/products/all", formData);
