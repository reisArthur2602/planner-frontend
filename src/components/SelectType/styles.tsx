import styled from 'styled-components';

interface IButtonIcon {
  active: 'true' | 'false';
}

const TypesArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonIcon = styled.button<IButtonIcon>`
  opacity: ${(props) => (props.active === 'true' ? '1' : '0.4')};
`;

export { TypesArea, ButtonIcon };
