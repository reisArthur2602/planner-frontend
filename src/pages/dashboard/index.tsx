import FilterBar from '../../components/FilterBar';
import TaskList from '../../components/TaskList';
import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <FilterBar />
      <TaskList/>
    </S.DashboardContainer>
  );
};
