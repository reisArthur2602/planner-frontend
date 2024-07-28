import { useEffect, useState } from 'react';
import { Task } from '../../types/task';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';

import { TaskService } from '../../services/task/TaskService';

import { FILTERS } from '../../utils/filters';
import { FilterOptions } from './sessions/Filter/filter';
import { FilterBar } from './sessions/FilterBar';
import { Loading, Tasklist } from '../../components';
import EmptyTask from '../../components/ui/EmptyTask';

export const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterOptions>(FILTERS[0].type);
  const [tasks, setTasks] = useState<Task[] | []>([]);

  useEffect(() => {
    (async () =>
      await TaskService.getByFilter(filter).then((response) => {
        setTasks(response);
        setLoading(false);
      }))();
  }, [filter]);

  if (loading) return <Loading />;

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
          <Tasklist tasks={tasks} />
        </>
      )}
    </Box>
  );
};
