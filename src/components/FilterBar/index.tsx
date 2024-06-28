import { useContext, } from 'react';
import { TaskContext } from '../../context/TaskContext';

import { FilterData,} from '../../types/filter-type';

import * as S from './styles';
import { FilterIcon } from 'lucide-react';
import { useTask } from '../../hooks/useTask';


const FilterBar = () => {
  const { handleFilter, filterType } = useContext(TaskContext);
  const { getTasks } = useTask();
 
  return (
    <S.FilterArea>
      {FilterData.map((t) => (
        <S.FilterCard
          key={t.type}
          active={t.type === filterType}
          onClick={() => handleFilter(t.type)}
        >
          <FilterIcon size={24} />
          <span>{t.title}</span>
        </S.FilterCard>
      ))}
    </S.FilterArea>
  );
};
export default FilterBar;
