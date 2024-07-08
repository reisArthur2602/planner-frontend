import { createContext, useState } from 'react';

import { DashboardProviderProps, IDashboardContext } from './type';
import { FilterOptions } from '../../types/filter';

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [filter, setFilter] = useState<FilterOptions>('all');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };

  
  return (
    <DashboardContext.Provider value={{ filter, toggleFilter }}>
      {children}
    </DashboardContext.Provider>
  );
};
