import { Task } from '../../types/task';

export type TaskContextProps =  {
  lateTasks: Task[];
  loading: boolean;
  lateCount: number;
};
