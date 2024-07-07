import { createContext, useState } from 'react';

import { FilterProviderProps, IFilterContext } from './type';
import { FilterOptions } from '../../types/filter';

export const FilterContext = createContext({} as IFilterContext);

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState<FilterOptions>('all');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };

  return (
    <FilterContext.Provider value={{ filter, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
