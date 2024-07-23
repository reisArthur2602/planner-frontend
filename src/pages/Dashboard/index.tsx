import { useEffect, useState } from 'react';
import { Task } from '../../types/task';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';

import { Grid } from '../../styles/grid';
import { Tasklist } from '../../components/task-list/Tasklist';

import { TaskService } from '../../services/task/TaskService';
import EmptyTask from '../../components/empyt-task/EmptyTask';

import { FILTERS } from '../../utils/filters';
import { FilterOptions } from './sessions/Filter/filter';
import { FilterBar } from './sessions/FilterBar';

export const Dashboard = () => {
  const [filter, setFilter] = useState<FilterOptions>(FILTERS[0].type);
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const fetchTasks = async () => {
    const data = await TaskService.getByFilter(filter);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <Box direction="column" gap="32px">
      <FilterBar filter={filter} filters={FILTERS} onChange={setFilter} />
      {tasks.length === 0 ? (
        <EmptyTask title="Você não possui nenhuma tarefa pendente" />
      ) : (
        <>
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
