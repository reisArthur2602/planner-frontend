import { User } from '../../types/user';

export interface IAuthContext  {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  handleLogin(email: string): Promise<void>;
  handleRegister(email: string): Promise<void>;
  handleLogout(): void;
}

export type AuthProvideChildren = React.PropsWithChildren;
