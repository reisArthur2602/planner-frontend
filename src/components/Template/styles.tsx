import styled from 'styled-components';

const Box = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 75.875rem;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`;

const Header = styled.header`
  padding-block: 1.5rem;
  border-bottom: 0.125rem solid var(--violet-800);

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 1.125rem;
      
      a {
        text-decoration: none;
        font-weight: 500;
        color: var(--violet-text-100);
        transition: all 0.3s;
        &:hover {
          color: var(--violet-text-200);
        }
      }

      button {
        border: 0;
        position: relative;

        span {
          height: 1.875rem;
          width: 1.875rem;
          background-color: var(--violet-700);
          color: var(--violet-text-100);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -18px;
          right: -10px;
        }
      }
    }
  }
`;

const Footer = styled.footer`
  background-color: var(--violet-800);
  padding-block: 0.75rem;
  text-align: center;
`;

export { Header, Container, Box, Footer };
