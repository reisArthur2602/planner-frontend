import { useContext, useEffect, useState } from 'react';
import { FilterOptions } from '../types/filter-type';
import { TaskResponse } from '../types/task';
import { apiAxios } from '../utils/api-axios';
import { TaskContext } from '../context/TaskContext';

interface IUseGetTask {
  tasks: TaskResponse[];
  error?: string;
}

export const useGetTask = (): IUseGetTask => {
  const { filterType } = useContext(TaskContext);
  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  const fetchTasks = async (filter: FilterOptions): Promise<void> => {
    try {
      const tasks = (await apiAxios.get(`/filter/${filter}`)).data;
      setTasks(tasks);
    } catch (error: any) {
      setTasks([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks(filterType);
  }, [filterType]);

  return { tasks };
};
