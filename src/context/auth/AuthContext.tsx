import { createContext, useMemo, useState } from 'react';
import { AuthProvideChildren, IAuthContext } from './types';
import { UserService } from '../../services/api/user/UserService';
import { User } from '../../types/user';
import { useToken } from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProvideChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const { saveToken } = useToken();
  const navigate = useNavigate();

  const handleLogin = async (email: string) => {
    await UserService.auth({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      toast.success('Bem-vindo de volta! Login realizado com sucesso.');
      navigate('/');
    });
  };

  const handleRegister = async (email: string) => {
    await UserService.create({ email }).then((res) => {
      setUser(res);
      saveToken(res.id);
      toast.success('Cadastro realizado com sucesso! Seja Bem-vindo');
      navigate('/');
    });
  };

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleRegister, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
