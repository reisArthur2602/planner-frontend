import { useState } from 'react';

import * as S from './styles';
import Filter, { FilterOptions } from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

export const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOptions>('all');

  const handleFilterClick = (filter: FilterOptions) => {
    setActiveFilter(filter);
  };

  return (
    <S.Container>
      <S.FilterArea>
        <Filter
          filter="all"
          activeFilter={activeFilter}
          onClick={handleFilterClick}
        />
        <Filter
          filter="today"
          activeFilter={activeFilter}
          onClick={handleFilterClick}
        />
        <Filter
          filter="week"
          activeFilter={activeFilter}
          onClick={handleFilterClick}
        />
        <Filter
          filter="month"
          activeFilter={activeFilter}
          onClick={handleFilterClick}
        />
        <Filter
          filter="year"
          activeFilter={activeFilter}
          onClick={handleFilterClick}
        />
      </S.FilterArea>

      <section>
        <S.Title>Minhas Tarefas</S.Title>
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
