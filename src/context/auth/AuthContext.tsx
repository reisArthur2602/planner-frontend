import { createContext,useState } from 'react';
import { AuthProvideChildren, IAuthContext } from './types';
import { UserService } from '../../services/api/user/UserService';
import { User } from '../../types/user';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProvideChildren) => {
  const [user, setUser] = useState<User | null>(null);



  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
