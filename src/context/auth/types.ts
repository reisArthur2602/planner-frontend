import { User } from '../../types/user';

export interface IAuthContext {
  user: User | null;
}
export type AuthProvideChildren = React.PropsWithChildren;
