import React from 'react';
import { FilterOptions } from '../../types/filter';

export interface IDashboardContext {
  filter: FilterOptions;
  toggleFilter(filter: FilterOptions): void;
}

export type DashboardProviderProps = React.PropsWithChildren;
