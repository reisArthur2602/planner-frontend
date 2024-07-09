import { ReactNode } from 'react';
import Logo from '../../assets/logo.svg';
import * as S from './styles';

import { Link } from 'react-router-dom';
import { BellIcon } from 'lucide-react';

import { useAuth } from '../../hooks/useAuth';

export interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const { isAuthenticated } = useAuth();
  return (
    <S.LayoutContainer>
      <S.LayoutHeader>
        <S.LayoutContent>
          <img src={Logo} alt="logo planner" />

          {isAuthenticated && (
            <S.LayoutNav>
              <Link to="/dashboard">Início</Link>
              <Link to="/dashboard/task">Tarefa</Link>
              <Link to="/sync">Sincronizar</Link>
              <Link to="/dashboard/late">
                <BellIcon size={24} />
                <span>2</span>
              </Link>
            </S.LayoutNav>
          )}
        </S.LayoutContent>
      </S.LayoutHeader>
      <S.LayoutMain>{children}</S.LayoutMain>
      <S.LayoutFooter>@Planner - Organizando sua vida</S.LayoutFooter>
    </S.LayoutContainer>
  );
};
