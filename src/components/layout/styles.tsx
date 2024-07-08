import styled from 'styled-components';
import { Container } from '../../styles/container';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
`;
export const LayoutHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  border-bottom: 2px solid var(--violet-800);
`;

export const LayoutContent = styled(Container)`
  padding-block: 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const LayoutNav = styled.nav`
  display: flex;
  gap: 1.125rem;

  a {
    transition: all 0.3s;
    &:hover {
      color: var(--violet-text-200);
    }
    &:last-child {
      position: relative;
      span {
        padding: 0.5rem;
        background-color: var(--violet-700);
        border-radius: 50%;
        font-size: 0.625rem;
        height: 1.5rem;
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -12px;
        right: -12px;
      }
    }
  }
`;

export const LayoutFooter = styled.footer`
  height: 2.5rem;
  text-align: center;
  p {
    font-size: 0.75rem;
  }
`;
