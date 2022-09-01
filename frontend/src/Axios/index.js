import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:3000",
});

/*export const login = async (formData) =>
  await HTTP.post("/users/signin", formData);

export const register = async (formData) =>
  await HTTP.post("/users/signup", formData);*/
  export const productList = async (cat,formData) =>
  await HTTP.get(cat  ? `/api/products/all?category=${cat}` : "/api/products/all", formData);

  export const categoryList = async (formData) =>
  await HTTP.get("/api/categories/all", formData);