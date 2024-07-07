import { useState } from 'react';
import { FilterOptions } from '../types/filter';

interface IUseFilter {
  filter: FilterOptions;
  toggleFilter(filter: FilterOptions): void;
}

export const useFilter = (): IUseFilter => {
  const [filter, setFilter] = useState<FilterOptions>('all');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };
  return { filter, toggleFilter };
};
