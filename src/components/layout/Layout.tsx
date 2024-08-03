import { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useLate } from '../../hooks/useLate';
import { NAVLINKS } from '../../utils/navlinks';

import * as S from './styles';
import { Header } from './sessions/header/Header';


export const Layout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, handleLogout } = useAuth();
  const { lateCount } = useLate();

  return (
    <S.LayoutContainer>
      <Header
        isAuthenticated={isAuthenticated}
        navlinks={NAVLINKS}
        count={lateCount}
      />

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
