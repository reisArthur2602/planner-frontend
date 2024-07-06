import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorInterceptor = (error: AxiosError) => {
  if (error.response?.status == 400) {
    const errorMessage = (
      error.response?.data as [{ path: string; message: string }]
    ).map((err) => err.message);

    errorMessage.forEach((err) => toast.error(err));

    return Promise.reject(errorMessage);
  }

  const errorMessage = (error.response?.data as { message: string }).message;
  toast.error(errorMessage);
  return Promise.reject(errorMessage);
};
