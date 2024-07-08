import React from 'react';
import { FilterOptions } from '../../types/filter';
import { TypeTask } from '../../types/task';

export interface IDashboardContext {
  filter: FilterOptions;
  type: TypeTask;
  toggleFilter(filter: FilterOptions): void;
  toggleType(type: TypeTask): void;
}

export type DashboardProviderProps = React.PropsWithChildren;
