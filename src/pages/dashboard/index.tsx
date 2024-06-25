import { useState } from 'react';

import * as S from './styles';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

type FilterOptions = 'all' | 'today' | 'week' | 'month' | 'year';

export const Dashboard = () => {
  const [filterActived, setFilterActived] = useState<FilterOptions>('all');

  return (
    <S.Container>
      <S.FilterArea>
        <Filter
          title="Todos"
          onClick={() => setFilterActived('all')}
          active={filterActived === 'all'}
        />
        <Filter
          title="Hoje"
          onClick={() => setFilterActived('today')}
          active={filterActived === 'today'}
        />
        <Filter
          title="Semana"
          onClick={() => setFilterActived('week')}
          active={filterActived === 'week'}
        />
        <Filter
          title="Mês"
          onClick={() => setFilterActived('month')}
          active={filterActived === 'month'}
        />
        <Filter
          title="Ano"
          onClick={() => setFilterActived('year')}
          active={filterActived === 'year'}
        />
      </S.FilterArea>

      <section>
        <S.Title>Minhas Tarefas</S.Title>
        <S.TaskArea>
          <TaskCard
            title="Titulo da tarefa"
            type={4}
            when="2024-06-26T19:27:00.000Z"
            id="123456789"
          />
        </S.TaskArea>
      </section>
    </S.Container>
  );
};
