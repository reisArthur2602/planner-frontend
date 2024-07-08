import styled from 'styled-components';

interface ITypeButton {
  active: boolean;
}

export const TypeButton = styled.button<ITypeButton>`
  opacity: ${(props) => !props.active && '0.4'};
`;
