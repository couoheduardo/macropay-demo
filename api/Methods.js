import AxiosInstance from "./AxiosInstance";

export const request = async (params, method) => {
    return await AxiosInstance.post('/', params)
}
