import FilterIcon from '../../assets/icons/filter-icon.svg';
import * as S from './styles';

enum FilterType {
  all = 'Todos',
  today = 'Hoje',
  week = 'Semana',
  month = 'Mês',
  year = 'Ano',
}

export type FilterOptions = keyof typeof FilterType;

interface IFilter {
  filter: FilterOptions;
  activeFilter: string;
  onClick: (filter: FilterOptions) => void;
}

const Filter = ({ activeFilter, filter, onClick }: IFilter) => {
  return (
    <S.FilterCard
      active={activeFilter === filter ? 'active' : 'false'}
      onClick={() => onClick(filter)}
    >
      <img src={FilterIcon} alt="Icone de filtro" width={24} height={21} />
      <span> {FilterType[filter]}</span>
    </S.FilterCard>
  );
};
export default Filter;
