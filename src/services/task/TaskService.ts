import { FilterOptions } from '../../pages/home/sessions/filter/type';
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

const update = async (data: Omit<Task, 'user_id'>): Promise<void> => {
  await Api.put(`/task/${data.id}`, data);
};
const remove = async (params: Pick<Task, 'id'>): Promise<void> => {
  await Api.delete(`/task/${params.id}`);
};

export const TaskService = {
  getByFilter,
  getById,
  late,
  create,
  update,
  remove,
};
