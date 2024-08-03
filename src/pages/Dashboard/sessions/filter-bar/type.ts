import { FiltersData } from "../../../../utils/filters";
import { FilterOptions } from "../filter/type";


export type FilterBarProps = {
  filter: FilterOptions;
  filters: FiltersData[];
  onChange: (filter:FilterOptions) => void
};
