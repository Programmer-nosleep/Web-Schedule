import axios from "axios"
import type { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig, AxiosInstance } from "axios"
import { BASE_URL } from "./api"

const axiosInstance : AxiosInstance = axios.create({ 
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem("token");

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }
)

axiosInstance.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res
  },
  
  (error: AxiosError): Promise<never> => {
    if (error.response) {
      const status = error.response.status

      switch (status) {
        case 401:
          window.location.href = '/'
          break
        case 404:
          console.log(`Page not found.`);
          break
        case 500:
          console.log(`server error. please try again later.`)
      }
    } else if (error.code === 'ECONNABORTED') {
      console.log("request timeout. please try again.")
    }

    return Promise.reject(error);
  }
)

export default axiosInstance