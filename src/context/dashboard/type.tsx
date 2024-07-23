import React from 'react';

import { TypeTask } from '../../types/task';
import { FilterOptions } from '../../pages/Dashboard/sessions/Filter/filter';

export interface IDashboardContext {
  filter: FilterOptions;
  type: TypeTask;
  toggleFilter(filter: FilterOptions): void;
  toggleType(type: TypeTask): void;
}

export type DashboardProviderProps = React.PropsWithChildren;
