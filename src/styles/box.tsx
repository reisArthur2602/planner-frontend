import styled from 'styled-components';

interface IBox {
  direction?: 'column' | 'row';
  align?: 'center' | 'normal' ;
  justify?: 'space-between' | 'center' | 'end' | 'start';
  gap?: '6px' | '12px' | '18px' | '24px' | '32px';
}

export const Box = styled.div<IBox>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
`;
