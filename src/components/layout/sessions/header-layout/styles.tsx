import styled, { css } from 'styled-components';
import { LayoutMain } from '../../styles';
import { Link } from 'react-router-dom';

type LayoutLinkProps = {
  active: boolean;
};

export const LayoutHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  border-bottom: 2px solid var(--violet-800);
`;

export const LayoutContent = styled(LayoutMain)`
  padding-block: 1.5rem;
  justify-content: space-between;
`;

export const LayoutNav = styled.nav`
  display: flex;
  gap: 1.125rem;
`;

export const LayoutLink = styled(Link)<LayoutLinkProps>`
  ${(props) =>
    props.active &&
    css`
    padding-bottom: 6px;
      color: var(--violet-text-200);
      border-bottom: 2px solid var(--violet-text-200);
      border-radius: 2px;
      font-weight: 700;
    `}

  &:hover {
    color: var(--violet-text-200);
  }
`;

export const LateTaskLink = styled(Link)`
  position: relative;
  span {
    padding: 0.5rem;
    background-color: var(--violet-700);
    border-radius: 50%;
    font-size: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -12px;
    right: -12px;
  }
`;
