import axios from "axios";

const api = axios.create({
    baseURL: "https://tx-backend.herokuapp.com/"
});

export default api;