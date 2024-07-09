import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import { Content } from '../styles/content';

type PrivateChildren = React.PropsWithChildren;

export const Private = ({ children }: PrivateChildren) => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Content>Carregando...</Content>;
  if (!loading && isAuthenticated) return children;
  if (!loading && !isAuthenticated) return <Navigate to="/" />;
};
