import styled from 'styled-components';

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const TaskListArea = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.125rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const TaskListItem = styled.li`
  height: 11.25rem;
  padding: 1.125rem;
  border: 0.0625rem solid var(--violet-700);
  border-radius: 0.375rem;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-weight: 600;
    color: var(--violet-text-100);
  }

  
`;

const TaskIcon = styled.div`
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


const TaskInfo = styled.strong`
 width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--violet-text-200);
`;

export { TaskListContainer, TaskListItem, TaskListArea, TaskIcon , TaskInfo  };
