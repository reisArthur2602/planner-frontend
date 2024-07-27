import { useToken } from '../../../hooks/useToken';
import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const { getToken } = useToken();

const Api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://planner-backend-k43w.onrender.com',
  headers: {
    userid: getToken(),
  },
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };
