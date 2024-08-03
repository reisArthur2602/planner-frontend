import { Loading } from '../components/ui/loading/Loading';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';


export const Routes = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />;

  return !loading && isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
};
