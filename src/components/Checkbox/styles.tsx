import styled from "styled-components";

const CheckboxArea = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--violet-text-200);

input{
  display: none;
}



`;

export {CheckboxArea}