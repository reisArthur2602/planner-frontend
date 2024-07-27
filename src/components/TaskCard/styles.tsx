import styled from 'styled-components';

type TaskCardProps = {
  done: boolean;
};

export const TaskCard = styled.li<TaskCardProps>`
  opacity: ${(props) => props.done && '0.3'};
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  height: 11.875rem;
  padding: 2rem;
  border-radius: 0.375rem;
  border: 1px solid var(--violet-700);
  cursor: pointer;

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--violet-text-200);
  }
`;
