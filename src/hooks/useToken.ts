import { Api } from '../services/api/axios-config';

type IUseToken =  {
  saveToken(token: string): void;
  getToken(): string | null;
  deleteToken(): void;
}

export const useToken = (): IUseToken => {
  const saveToken = (token: string) => {
    localStorage.setItem('access-token', token);
    Api.defaults.headers['userid'] = token;
    return;
  };
  const getToken = () => {
    return localStorage.getItem('access-token') || null;
  };

  const deleteToken = () => {
    delete Api.defaults.headers['userid'];
    localStorage.removeItem('access-token');
    return;
  };

  return { saveToken, deleteToken, getToken };
};
