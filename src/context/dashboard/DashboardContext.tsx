import { createContext, useState } from 'react';

import { DashboardProviderProps, IDashboardContext } from './type';

import { TypeTask } from '../../types/task';
import { FilterOptions } from '../../pages/Dashboard/sessions/Filter/filter';

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [filter, setFilter] = useState<FilterOptions>('all');
  const [type, setType] = useState<TypeTask>('gym');

  const toggleFilter = (filter: FilterOptions) => {
    setFilter(filter);
  };

  const toggleType = (type: TypeTask) => {
    setType(type);
  };

  return (
    <DashboardContext.Provider
      value={{ filter, type, toggleFilter, toggleType }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
