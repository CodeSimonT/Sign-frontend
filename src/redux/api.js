import axios from "axios";

const API = axios.create({ baseURL: "htts://Sign-backend.onrender.com" });

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
