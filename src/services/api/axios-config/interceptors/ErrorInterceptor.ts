import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  if (error.response?.status == 400) {
    const errorMessage = (
      error.response?.data as [{ path: string; message: string }]
    ).map((err) => err.message);

    return Promise.reject(errorMessage.forEach((err) => alert(err)));
  }

  const errorMessage = (error.response?.data as { message: string }).message;
  alert(errorMessage);
  return Promise.reject(errorMessage);
};
