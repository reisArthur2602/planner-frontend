import { User } from '../../types/user';

export interface IAuthContext {
  user: User | null;
  isAuthenticated: boolean;
  handleLogin(email: string): Promise<void>;
}
export type AuthProvideChildren = React.PropsWithChildren;
