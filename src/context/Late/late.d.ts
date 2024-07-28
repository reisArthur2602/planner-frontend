import { Task } from '../../types/task';

export type LateContextData = {
  tasks: Task[];
  loading: boolean;
  lateCount: number;
};
