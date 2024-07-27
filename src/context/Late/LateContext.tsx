import { createContext, ReactNode, useEffect, useState } from 'react';
import { LateContextData } from './late';
import { Task } from '../../types/task';
import { TaskService } from '../../services/task/TaskService';

export const LateContext = createContext({} as LateContextData);

export const LateProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () =>
      await TaskService.late().then((response) => setTasks(response)))();
  }, []);

  return (
    <LateContext.Provider value={{ tasks, lateCount: tasks.length }}>
      {children}
    </LateContext.Provider>
  );
};
