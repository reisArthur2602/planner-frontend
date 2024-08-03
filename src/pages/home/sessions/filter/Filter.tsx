import { FilterIcon } from 'lucide-react';
import { FilterProps } from './type';
import * as S from './styles';

export const Filter = ({ filter, selected, title, onChange }: FilterProps) => {
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


