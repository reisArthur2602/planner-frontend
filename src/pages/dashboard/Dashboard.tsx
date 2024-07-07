import { useState } from 'react';
import { Task } from '../../types/task';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';
import { FilterBar } from './sessions/filter-bar/FilterBar';
import { Grid } from '../../styles/grid';
import { Tasklist } from '../../components/task-list/Tasklist';
import * as S from './styles';

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <Box direction="column" gap="32px">
      <FilterBar />
      <Title>
        Minhas Tarefas <Highlight>{`(0)`}</Highlight>
      </Title>
      <Grid></Grid>
    </Box>
  );
};
