
import { FilterOptions } from '../types/filter-type';

import { TaskResponse } from '../types/task';
import { apiAxios } from '../utils/api-axios';

interface IUseTask {
  getTasks(filter: FilterOptions): Promise<TaskResponse[]>;
}



export const useTask = (): IUseTask => {
  const getTasks = async (filter: FilterOptions): Promise<TaskResponse[]> => {
    return (await apiAxios.get(`/filter/${filter}`)).data;
  };

  return { getTasks };
};
