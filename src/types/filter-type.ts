export type FilterOptions = 'all' | 'today' | 'week' | 'month' | 'year';

interface IFilterTypes {
  type: FilterOptions;
  title: string;
}

export const FilterData: IFilterTypes[] = [
  { type: 'all', title: 'Todos' },
  { type: 'today', title: 'Hoje' },
  { type: 'week', title: 'Semana' },
  { type: 'month', title: 'Mês' },
  { type: 'year', title: 'Ano' },
] as const;
