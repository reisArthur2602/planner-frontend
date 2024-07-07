import { useContext } from 'react';
import { FilterContext } from '../context/filter/FilterContext';

export const useFilter = () => {
  return useContext(FilterContext);
};
