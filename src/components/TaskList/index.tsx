import { useContext, useEffect, useState } from 'react';
import { FilterOptions } from '../../types/filter-type';
import { TaskResponse } from '../../types/task';
import { getCategoryIcon } from '../../utils/getCategoryIcon';

import * as S from './styles';
import { TaskContext } from '../../context/TaskContext';
import { useTask } from '../../hooks/useTask';
import { format } from 'date-fns';

const TaskList = () => {
  const { filterType } = useContext(TaskContext);
  const { getTasks } = useTask();

  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  const fetchTasks = async (filter: FilterOptions) => {
    try {
      const data = await getTasks(filter);
      setTasks(data);
    } catch (error: any) {
      setTasks([])
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks(filterType);
    console.log(tasks)
  }, [filterType]);

  return (
    <S.TaskListContainer>
      <h1>Minhas Tarefas</h1>

      <S.TaskListArea>
        {tasks.map((t) => (
          <S.TaskListItem key={t.id}>
            <S.TaskIcon>{getCategoryIcon('gym')}</S.TaskIcon>
            <h4>{t.title}</h4>
            <S.TaskInfo>
              <span>{format(new Date(t.when), 'dd/MM/yyyy')}</span>
              <span>{format(new Date(t.when), 'HH:mm')}</span>
            </S.TaskInfo>
          </S.TaskListItem>
        ))}
      </S.TaskListArea>
    </S.TaskListContainer>
  );
};

export default TaskList;
