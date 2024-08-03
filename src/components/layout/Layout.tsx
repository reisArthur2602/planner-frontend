import { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useTask } from '../../hooks/useTask';
import { NAVLINKS } from '../../utils/navlinks';

import { HeaderLayout } from './sessions/header-layout/HeaderLayout';
import * as S from './styles';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, handleLogout } = useAuth();
  const { lateCount } = useTask();

  return (
    <S.LayoutContainer>
      <HeaderLayout
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
