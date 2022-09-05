import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

  export const productList = async (cat,formData) =>
  await HTTP.get(cat  ? `/api/products/all?category=${cat}` : "/api/products/all", formData);

  export const categoryList = async (formData) =>
  await HTTP.get("/api/categories/all", formData);

  export const register = async (formData) =>
  await HTTP.post("/api/users/signup", formData);