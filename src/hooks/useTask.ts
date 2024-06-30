
import { TaskProps, TaskResponse } from '../types/task';
import { apiAxios } from '../utils/api-axios';

interface IUseTask {
 
  create(data: TaskProps): Promise<TaskResponse>;
}

export const useTask = (): IUseTask => {

  const create = async (data: TaskProps): Promise<TaskResponse> => {
    return (await apiAxios.post('/', data)).data;
  };

  return { create };
};
