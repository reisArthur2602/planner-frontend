import React from "react";
import { FilterOptions } from "../../types/filter";

export interface IFilterContext {
  filter: FilterOptions;
  toggleFilter(filter: FilterOptions): void;
}

export type FilterProviderProps = React.PropsWithChildren