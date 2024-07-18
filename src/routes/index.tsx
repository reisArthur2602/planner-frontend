import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './appRoutes';
import { AuthRoutes } from './authRoutes';

export const Routes = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <div>Carregando...</div>;

  return !loading && isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
};
