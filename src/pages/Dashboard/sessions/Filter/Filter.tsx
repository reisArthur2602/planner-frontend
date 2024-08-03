import { FilterIcon } from 'lucide-react';

import * as S from './styles';
import { FilterProps } from './type';

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
