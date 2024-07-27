import Logo from '../../../../assets/logo.svg';
import { BellIcon } from 'lucide-react';
import { HeaderProps } from './header';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ count, navlinks, isAuthenticated }: HeaderProps) => {
  const [pathname, setPathname] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <S.LayoutHeader>
      <S.LayoutContent>
        <img src={Logo} alt="logo planner" />

        {isAuthenticated && (
          <S.LayoutNav>
            {navlinks.map((n) => (
              <S.LayoutLink to={n.path} active={pathname === n.path}>
                {n.title}
              </S.LayoutLink>
            ))}

            <S.LateTaskLink to="/dashboard/late">
              <BellIcon size={24} />
              {count > 0 && <span>{count}</span>}
            </S.LateTaskLink>
          </S.LayoutNav>
        )}
      </S.LayoutContent>
    </S.LayoutHeader>
  );
};

export default Header;
