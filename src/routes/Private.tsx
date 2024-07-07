import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Container } from '../styles/container';

type PrivateChildren = React.PropsWithChildren;

export const Private = ({ children }: PrivateChildren) => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Container>Carregando...</Container>;
  if (!loading && isAuthenticated) return children;
  if (!loading && !isAuthenticated) return <Navigate to="/" />;
};
