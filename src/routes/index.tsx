import { Loading } from '../components';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './authRoutes';

export default () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />;

  return !loading && isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
};
