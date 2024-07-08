import { FilterOptions } from '../../types/filter';

import { Task } from '../../types/task';
import { Api } from '../api/axios-config';

const getByFilter = async (filter: FilterOptions): Promise<Task[] | []> => {
  const { data } = await Api.get(`/task/${filter}`);
  return data;
};

export const TaskService = {
  getByFilter,
};