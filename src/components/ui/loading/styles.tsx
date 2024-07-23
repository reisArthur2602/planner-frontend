import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  color: var(--violet-500);
  
  animation: ${spinAnimation} 1s linear infinite;
  svg {
  }
`;
