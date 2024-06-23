import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-notes-23ko.onrender.com"
});

