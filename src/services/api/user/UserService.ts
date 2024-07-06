import { User } from '../../../types/user';
import { Api } from '../axios-config';

const auth = async (params: Omit<User, 'id'>): Promise<User> => {
  const { data } = await Api.post('/user/session', params);
  return data;
};
const create = async (params: Omit<User, 'id'>): Promise<User> => {
  const { data } = await Api.post('/user/register', params);
  return data;
};

export const UserService = {
  auth,
  create,
};
