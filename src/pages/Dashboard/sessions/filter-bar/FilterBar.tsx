
import { FilterBarProps } from './type';
import { Box } from '../../../../styles/box';
import { Filter } from '../filter/filter';

export const FilterBar = ({ filter, filters, onChange }: FilterBarProps) => {
  return (
    <Box justify="space-between" gap="32px">
      {filters.map((f) => (
        <Filter
          key={f.type}
          filter={f.type}
          onChange={onChange}
          title={f.title}
          selected={f.type === filter}
        />
      ))}
    </Box>
  );
};
