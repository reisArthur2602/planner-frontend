import { useState } from 'react';
import { Filter } from '../../components';
import * as S from './styles';

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
    </S.Container>
  );
};
