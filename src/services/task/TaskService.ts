import { FilterOptions } from '../../types/filter';

import { Task } from '../../types/task';
import { Api } from '../api/axios-config';

const getByFilter = async (filter: FilterOptions): Promise<Task[] | []> => {
  const { data } = await Api.get(`/task/${filter}`);
  return data;
};

const getById = async (id: string): Promise<Task> => {
  const { data } = await Api.get(`/task/${id}`);
  return data;
};

const late = async (): Promise<Task[] | []> => {
  const { data } = await Api.get('/task/late');
  return data;
};
const create = async (
  params: Pick<Task, 'title' | 'description' | 'when' | 'type'>
): Promise<void> => {
  await Api.post('/task', params);
};

export const TaskService = {
  getByFilter,
  getById,
  late,
  create,
};
