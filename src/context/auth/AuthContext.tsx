import { createContext, useEffect, useMemo, useState } from 'react';
import { AuthProvideChildren, IAuthContext } from './auth';
import { UserService } from '../../services/api/user/UserService';
import { User } from '../../types/user';
import { useToken } from '../../hooks/useToken';

import { toast } from 'react-toastify';
import { Api } from '../../services/api/axios-config';
import { LateProvider } from '../late/LateContext';



export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProvideChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { saveToken, deleteToken, getToken } = useToken();

  useEffect(() => {
    const token = getToken();
    if (token)
      (async () => {
        Api.defaults.headers['userid'] = token;
        setLoading(true);
        await UserService.details()
          .then((response) => setUser(response))
          .catch(() => deleteToken())
          .finally(() => setLoading(false));
      })();
  }, []);

  const handleLogin = async (email: string) => {
    setLoading(true);

    await UserService.auth({ email })
      .then((res) => {
        setUser(res);
        saveToken(res.id);
        toast.success('Bem-vindo de volta! Login realizado com sucesso.');
      })
      .finally(() => setLoading(false));
  };

  const handleRegister = async (email: string) => {
    setLoading(true);

    await UserService.create({ email })
      .then((res) => {
        setUser(res);
        saveToken(res.id);
        toast.success('Cadastro realizado com sucesso! Seja Bem-vindo');
      })
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    deleteToken();
    setUser(null);
  };

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
        isAuthenticated,
        loading,
      }}
    >
      <LateProvider>{children}</LateProvider>
    </AuthContext.Provider>
  );
};
