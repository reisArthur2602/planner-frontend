import styled from 'styled-components';

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  span {
    font-weight: 500;
  }

  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.5938rem 0.75rem;
    border: 0.125rem solid var(--violet-700);
    border-radius: 0.375rem;
    &::placeholder {
      color: var(--violet-text-200);
    }
    &:focus {
      border-color: var(--violet-text-200);
    }
  }
  input[type='date'],
  input[type='time'] {
    padding: 0.5938rem 0.75rem;
    border-bottom: 0.125rem solid var(--violet-700);
    font-size: 0.875rem;

    &::placeholder {
      color: var(--violet-text-200);
    }
    &:focus {
      border-color: var(--violet-text-200);
    }
  }
`;

const TextAreaContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  span {
    font-weight: 500;
  }
  textarea {
    font-size: 0.875rem;
    border: 0.125rem solid var(--violet-700);
    border-radius: 0.375rem;
    padding: 0.5938rem 0.75rem;
    resize: none;
    &::placeholder {
      color: var(--violet-text-200);
    }
    &:focus {
      border-color: var(--violet-text-200);
    }
  }
`;



export { InputContainer, TextAreaContainer};
