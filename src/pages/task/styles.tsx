import styled from 'styled-components';

const Form = styled.form`
  max-width: 41.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin: 0 auto;
`;

const ButtonsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--violet-text-100);
  }
`;

export { Form, ButtonsArea };
