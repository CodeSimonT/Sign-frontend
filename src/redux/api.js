import axios from "axios";
const env = import.meta.env;
const URL = env.VITE_REACT_SERVER_URL;
const API = axios.create({ baseURL: URL });

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
