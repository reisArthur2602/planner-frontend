import { useContext, useEffect, useState } from 'react';
import { FilterOptions } from '../../types/filter-type';
import { TaskResponse } from '../../types/task';
import { getCategoryIcon } from '../../utils/getCategoryIcon';

import * as S from './styles';
import { TaskContext } from '../../context/TaskContext';
import { useTask } from '../../hooks/useTask';

const TaskList = () => {
  const { filterType } = useContext(TaskContext);
  const { getTasks } = useTask();

  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  const fetchTasks = async (filter: FilterOptions) => {
    try {
      const data = await getTasks(filter);
      setTasks(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks(filterType)
  }, [filterType]);

  console.log(tasks);
  return (
    <S.TaskListContainer>
      <h1>Minhas Tarefas</h1>

      <S.TaskListArea>
        <S.TaskListItem>
          <S.TaskIcon>{getCategoryIcon('gym')}</S.TaskIcon>
          <h4>Titulo da tarefa</h4>
          <S.TaskInfo>
            <span>27/06/2027</span>
            <span>18:00</span>
          </S.TaskInfo>
        </S.TaskListItem>
      </S.TaskListArea>
    </S.TaskListContainer>
  );
};

export default TaskList;
