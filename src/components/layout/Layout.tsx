import { ReactNode } from 'react';
import Logo from '../../assets/logo.svg';
import * as S from './styles';
import { Container } from '../../styles/container';

export interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <S.LayoutContainer>
      <S.LayoutHeader>
        <S.LayoutContent>
          <img src={Logo} alt="logo planner" />
          <nav></nav>
        </S.LayoutContent>
      </S.LayoutHeader>
      <Container>{children}</Container>
    </S.LayoutContainer>
  );
};
