import styled from 'styled-components';

export const TextareaContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
  font-size: 0.875rem;
`;

export const Textarea = styled.textarea`
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--violet-700);
  resize: none;
  flex: 1;

  &::placeholder {
    color: var(--violet-text-200);
    font-weight: 400;
  }

  &:focus {
    border-color: var(--violet-text-100);
  }
`;
