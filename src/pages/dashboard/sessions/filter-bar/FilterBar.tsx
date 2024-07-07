import { FilterIcon } from 'lucide-react';
import { useFilter } from '../../../../hooks/useFilter';
import { Box } from '../../../../styles/box';
import { FilterData } from '../../../../utils/filter/FilterData';
import * as S from './style';

export const FilterBar = () => {
  const { filter, toggleFilter } = useFilter();

  return (
    <Box justify="space-between" gap="32px">
      {FilterData.map((f) => (
        <S.FilterCard
          key={f.type}
          onClick={() => toggleFilter(f.type)}
          active={f.type === filter}
        >
          <FilterIcon size={24} />
          <span>{f.title}</span>
        </S.FilterCard>
      ))}
    </Box>
  );
};

// return (
//   <S.FilterArea>
//     {FilterData.map((t) => (
//       <S.FilterCard
//         key={t.type}
//         active={t.type === filterType}
//         onClick={() => handleFilter(t.type)}
//       >
//         <FilterIcon size={24} />
//         <span>{t.title}</span>
//       </S.FilterCard>
//     ))}
//   </S.FilterArea>
// );
// };
