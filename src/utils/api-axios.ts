import axios, { AxiosError } from 'axios';

export const apiAxios = axios.create({
  baseURL: 'http://localhost:3333/task',
});

apiAxios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
  }
);
