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
`;

export const LayoutContent = styled(Container)`
  padding-block: 1.5rem;
  align-items: center;
  justify-content: space-between;
`;
