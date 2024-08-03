import { NAVLINKS } from '../../../../utils/navlinks';

export type HeaderProps = {
  count: number;
  navlinks: typeof NAVLINKS;
  isAuthenticated: boolean;
};
