import { createContext, ReactNode, useEffect, useState } from 'react';

import { Task } from '../../types/task';
import { TaskService } from '../../services/task/TaskService';
import { useLocation } from 'react-router-dom';
import { TaskContextProps } from './type';

export const TaskContext = createContext({} as TaskContextProps);

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [lateTasks, setLateTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { pathname } = useLocation();

  useEffect(() => {
    (async () =>
      await TaskService.late().then((response) => {
        setLateTasks(response);
        setLoading(false);
      }))();
  }, [pathname]);

  return (
    <TaskContext.Provider
      value={{ lateTasks, lateCount: lateTasks.length, loading }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
