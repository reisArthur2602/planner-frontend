import { Loading } from '../components/ui/loading/Loading';
import { useAuth } from '../hooks/useAuth';
import UserRoutes from './user';
import AuthRoutes from './auth';

export default () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />;

  return !loading && isAuthenticated ? <AuthRoutes /> : <UserRoutes />;
};
