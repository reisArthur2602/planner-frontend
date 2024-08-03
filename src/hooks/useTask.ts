import { useContext } from 'react';
import { TaskContext } from '../context/task/TaskContext';

export const useTask = () => {
  return useContext(TaskContext);
};
