import { FilterOptions } from '../types/filter-type';

import { TaskProps, TaskResponse } from '../types/task';
import { apiAxios } from '../utils/api-axios';

interface IUseTask {
  getTasks(filter: FilterOptions): Promise<TaskResponse[]>;
  create(data: TaskProps): Promise<TaskResponse>;
}

export const useTask = (): IUseTask => {
  const getTasks = async (filter: FilterOptions): Promise<TaskResponse[]> => {
    return (await apiAxios.get(`/filter/${filter}`)).data;
  };

  const create = async (data: TaskProps): Promise<TaskResponse> => {
    return (await apiAxios.post('/', data)).data;
  };

  return { getTasks, create };
};
