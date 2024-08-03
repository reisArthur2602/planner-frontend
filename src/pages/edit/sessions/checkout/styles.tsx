import styled from 'styled-components';

export const CheckBoxContainer = styled.label`
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  color: var(--violet-text-200);

  input[type='checkbox'] {
    display: none;
  }
`;
