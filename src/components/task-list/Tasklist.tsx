import { format } from 'date-fns';
import { Box } from '../../styles/box';

import { Icon } from '../../styles/icon';

import { getTypeIcon } from '../../utils/task/GetTypeIcon';
import { TypeTask } from '../../types/task';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface ITaskList {
  title: string;
  when: string;
  id: string;
  type: TypeTask;
}

export const Tasklist = ({ id, title, type, when }: ITaskList) => {
  const Redirect = useNavigate();
  return (
    <S.TaskCard onClick={() => Redirect(`/dashboard/task/edit/${id}`)}>
      <Icon>{getTypeIcon(type)}</Icon>
      <h4>{title}</h4>
      <Box justify="space-between">
        <span>{format(new Date(when), 'dd/MM/yyyy')}</span>
        <span>{format(new Date(when), 'HH:mm')}</span>
      </Box>
    </S.TaskCard>
  );
};
