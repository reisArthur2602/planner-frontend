import styled from 'styled-components';

interface IFilterCard {
  active: boolean;
}

export const FilterCard = styled.button<IFilterCard>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 6.25rem;
  background-color: var(--violet-600);
  color: var(--violet-text-200);
  opacity: ${(props) => !props.active && '0.4'};
  border-radius: 0.375rem;
  padding: 1.125rem;
  span {
    text-align: right;
    font-size: 1.125rem;
    font-weight: medium;
  }
`;
