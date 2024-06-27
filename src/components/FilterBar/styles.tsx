import styled from 'styled-components';

interface IFilterCard {
  active: boolean;
}

const FilterCard = styled.button<IFilterCard>`
  background-color: var(--violet-700);
  color: var(--violet-text-200);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 6.25rem;
  opacity: ${(props) => !props.active && '0.4'};
  padding: 1.125rem;
  border: 0.125rem solid var(--violet-600);
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 500;

  span {
    text-align: right;
  }
`;

const FilterArea = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
`;
export { FilterCard, FilterArea };
