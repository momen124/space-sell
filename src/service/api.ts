import axios, { AxiosInstance } from 'axios';

class Api {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
    });

    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

class CustomApi extends Api {}

const api = new CustomApi();
export default api;

