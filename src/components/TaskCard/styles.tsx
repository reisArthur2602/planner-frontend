import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
  height: 11.25rem;
  padding: 1.125rem;
  border: 0.0625rem solid var(--violet-700);
  border-radius: 0.375rem;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-weight: 600;
    color: var(--violet-text-100);
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--violet-text-200);
  }
`;

export { Container };
