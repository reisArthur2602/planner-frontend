import { createContext, useEffect, useMemo, useState } from 'react';
import { AuthProvideChildren, IAuthContext } from './types';
import { UserService } from '../../services/api/user/UserService';
import { User } from '../../types/user';
import { useToken } from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DashboardProvider } from '../dashboard/DashboardContext';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProvideChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { saveToken, deleteToken } = useToken();

  const fetchUser = async () => {
    try {
      await UserService.details()
        .then((response) => setUser(response))
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogin = async (email: string) => {
    await UserService.auth({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      toast.success('Bem-vindo de volta! Login realizado com sucesso.');
      setLoading(false);
    });
  };

  const handleRegister = async (email: string) => {
    await UserService.create({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      toast.success('Cadastro realizado com sucesso! Seja Bem-vindo');
      setLoading(false);
    });
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
      <DashboardProvider>{children}</DashboardProvider>
    </AuthContext.Provider>
  );
};
