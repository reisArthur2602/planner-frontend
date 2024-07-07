
import { Box } from '../../styles/box';
import { FilterBar } from './sessions/filter-bar/FilterBar';
import * as S from './styles';

export const Dashboard = () => {
  return (
    <Box direction="column" gap="32px">
      <FilterBar />
    </Box>
  );
};
