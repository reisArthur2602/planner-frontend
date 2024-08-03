import { createContext, ReactNode, useEffect, useState } from 'react';

import { Task } from '../../types/task';
import { TaskService } from '../../services/task/TaskService';
import { useLocation } from 'react-router-dom';
import { LateContextData } from './type';

export const LateContext = createContext({} as LateContextData);

export const LateProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { pathname } = useLocation();

  useEffect(() => {
    (async () =>
      await TaskService.late().then((response) => {
        setTasks(response);
        setLoading(false);
      }))();
  }, [pathname]);

  return (
    <LateContext.Provider value={{ tasks, lateCount: tasks.length, loading }}>
      {children}
    </LateContext.Provider>
  );
};
