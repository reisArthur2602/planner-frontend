import { Loading } from '../components';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './appRoutes';
import { AuthRoutes } from './authRoutes';

export const Routes = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />;

  return !loading && isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
};
