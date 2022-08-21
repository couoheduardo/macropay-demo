import axios from "axios";


const axiosInstance = axios.create({
    headers: {
        Accept: "application/json",
    }
});

axiosInstance.interceptors.request.use(async (request) => {
    return request;
}, (error) => {
    console.log(error.response)
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error.response)
})

export default axiosInstance;