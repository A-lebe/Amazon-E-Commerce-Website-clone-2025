import axios from "axios";
const axiosInstance = axios.create({
    // baseURL:"https://127.0.0.1:5001/clone-8e84f/us-central1/api",
    baseURL:"http:localhost:5000"
})
export { axiosInstance };