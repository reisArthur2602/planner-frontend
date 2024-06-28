import React, { createContext, useState } from 'react';
import { FilterOptions } from '../types/filter-type';
import { CategoryTypes } from '../types/task';

interface ITaskContext {
  filterType: FilterOptions;
  category: CategoryTypes;
  handleFilter(filter: FilterOptions): void;
  handleCategory(category: CategoryTypes): void;
}
type Props = React.PropsWithChildren;

const TaskContext = createContext({} as ITaskContext);

const TaskProvider = ({ children }: Props) => {
  const [filterType, setFilterType] = useState<FilterOptions>('all');
  const [category, setCategory] = useState<CategoryTypes>('code');

  const handleFilter = (filter: FilterOptions) => {
    setFilterType(filter);
  };
  const handleCategory = (category: CategoryTypes) => {
    setCategory(category);
  };

  console.log(filterType);
  return (
    <TaskContext.Provider
      value={{ filterType, category, handleFilter, handleCategory }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
