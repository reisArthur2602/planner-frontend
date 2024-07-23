import { FilterIcon } from 'lucide-react';
import { FilterProps } from './filter';
import * as S from './styles';

const Filter = ({ filter, selected, title, onChange }: FilterProps) => {
  return (
    <S.FilterCard
      key={filter}
      onClick={() => onChange(filter)}
      active={selected}
    >
      <FilterIcon size={24} />
      <span>{title}</span>
    </S.FilterCard>
  );
};

export default Filter;
