import React, { createContext, useState } from 'react';
import { FilterOptions } from '../types/filter-type';

interface ITaskContext {
  filterType: FilterOptions;
  handleFilter(filter: FilterOptions): void;
}
type Props = React.PropsWithChildren;

const TaskContext = createContext({} as ITaskContext);

const TaskProvider = ({ children }: Props) => {
  const [filterType, setFilterType] = useState<FilterOptions>('all');

  const handleFilter = (filter: FilterOptions) => {
    setFilterType(filter);
  };
  console.log(filterType);
  return (
    <TaskContext.Provider value={{ filterType, handleFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
