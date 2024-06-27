import * as S from './styles';

import TaskCard from '../../components/TaskCard';
import FilterBar from '../../components/FilterBar';

export const Dashboard = () => {
  return (
    <S.Container>
      <section>
        <S.Title>Minhas Tarefas</S.Title>
        <FilterBar />
        
        <S.TaskArea>
          <TaskCard
            title="Titulo da tarefa"
            type="study"
            when="2024-06-26T19:27:00.000Z"
            id="123456789"
          />
        </S.TaskArea>
      </section>
    </S.Container>
  );
};
