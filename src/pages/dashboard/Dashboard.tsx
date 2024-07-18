import { useEffect, useState } from 'react';
import { Task } from '../../types/task';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';
import { FilterBar } from './sessions/filter-bar/FilterBar';
import { Grid } from '../../styles/grid';
import { Tasklist } from '../../components/task-list/Tasklist';
import { useDashboard } from '../../hooks/useDashboard';
import { TaskService } from '../../services/task/TaskService';
import EmptyTask from '../../components/empyt-task/EmptyTask';

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const { filter } = useDashboard();

  const fetchTasks = async () => {
    const data = await TaskService.getByFilter(filter);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <Box direction="column" gap="32px">
      
      {tasks.length === 0 ? (
        <EmptyTask title="Você não possui nenhuma tarefa pendente" />
      ) : (
        <>
          <FilterBar />
          <Title>
            Minhas Tarefas <Highlight>{`(${tasks.length})`}</Highlight>
          </Title>
          <Grid>
            {tasks && tasks.map((task) => <Tasklist {...task} key={task.id} />)}
          </Grid>
        </>
      )}
    </Box>
  );
};
