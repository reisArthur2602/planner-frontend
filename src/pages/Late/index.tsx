import { useEffect, useState } from 'react';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';
import { Task } from '../../types/task';
import { TaskService } from '../../services/task/TaskService';
import { Tasklist } from '../../components';
import EmptyTask from '../../components/ui/EmptyTask';
import { useLate } from '../../hooks/useLate';

export const Late = () => {
const {tasks , lateCount} = useLate()

  // const [tasks, setTasks] = useState<Task[] | []>([]);

  // const fetchTasks = async () => {
  //   const data = await TaskService.late();
  //   setTasks(data);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  return (
    <Box direction="column" gap="24px">
      {lateCount === 0 ? (
        <EmptyTask title="Você não possui nenhuma tarefa atrasada" />
      ) : (
        <>
          <Title>
            Tarefas Atrasadas <Highlight>{`(${lateCount})`}</Highlight>
          </Title>
          <Tasklist tasks={tasks} />
        </>
      )}
    </Box>
  );
};
