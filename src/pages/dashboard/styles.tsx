import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const TaskArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 18.125rem);
  grid-gap: 1.125rem;
`;

export { Container, TaskArea, Title };
