import { FilterOptions } from '../../types/filter';

interface IFilterData {
  type: FilterOptions;
  title: string;
}

export const FilterData: IFilterData[] = [
  { type: 'all', title: 'Todos' },
  { type: 'today', title: 'Hoje' },
  { type: 'week', title: 'Semana' },
  { type: 'month', title: 'Mês' },
  { type: 'year', title: 'Ano' },
] as const;
