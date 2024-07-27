import { ReactNode } from 'react';
import Logo from '../../assets/logo.svg';
import * as S from './styles';

import { Link } from 'react-router-dom';
import { BellIcon, LogOut } from 'lucide-react';

import { useAuth } from '../../hooks/useAuth';
import { useLate } from '../../hooks/useLate';

export interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const { isAuthenticated, handleLogout } = useAuth();
  const { lateCount } = useLate();
  return (
    <S.LayoutContainer>
      <S.LayoutHeader>
        <S.LayoutContent>
          <img src={Logo} alt="logo planner" />
          {isAuthenticated && (
            <S.LayoutNav>
              <Link to="/dashboard">Início</Link>
              <Link to="/dashboard/task">Tarefa</Link>
              <Link to="/dashboard/sync">Sincronizar</Link>
              <Link to="/dashboard/late">
                <BellIcon size={24} />
                {lateCount > 0 && <span>{lateCount}</span>}
              </Link>
            </S.LayoutNav>
          )}
        </S.LayoutContent>
      </S.LayoutHeader>

      <S.LayoutMain>
        {children}

        {isAuthenticated && (
          <S.ButtonLogout onClick={handleLogout}>
            <LogOut />
          </S.ButtonLogout>
        )}
      </S.LayoutMain>
      <S.LayoutFooter>@Planner - Organizando sua vida</S.LayoutFooter>
    </S.LayoutContainer>
  );
};
