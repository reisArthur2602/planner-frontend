import { Api } from "../services/api/axios-config";


interface IUseToken {
  saveToken(token: string): void;
  getToken(): string | null;
  deleteToken(): void;
}

export const useToken = (): IUseToken => {
  const saveToken = (token: string) => {
    localStorage.setItem('access-token', token);
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return;
  };
  const getToken = () => {
    return localStorage.getItem('access-token') || null;
  };

  const deleteToken = () => {
    delete Api.defaults.headers.common['Authorization'];
    localStorage.removeItem('access-token');
    return;
  };

  return { saveToken, deleteToken, getToken };
};
