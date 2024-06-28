import styled from 'styled-components';

interface IButtonIcon {
  active: boolean;
}

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonIcon = styled.button<IButtonIcon>`
  opacity: ${(props) => !props.active && '0.4'};
`;

const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-size: 1.5rem;
  height: 3.75rem;
  width: 3.75rem;
  background-color: var(--violet-500);
  border-radius: 50%;
`;

export { CategoryContainer, ButtonIcon, CategoryIcon };
