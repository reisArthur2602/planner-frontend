import { format } from 'date-fns';
import { Box } from '../../styles/box';

import { Icon } from '../../styles/icon';

import { getCategoryIcon } from '../../utils/filter/GetCategory';
import { TypeTask } from '../../types/task';
import * as S from './style';

interface ITaskList {
  title: string;
  when: string;
  type: TypeTask;
}

export const Tasklist = ({ title, type, when }: ITaskList) => {
  return (
    <S.TaskCard>
      <Icon>{getCategoryIcon(type)}</Icon>
      <h4>{title}</h4>
      <Box justify="space-between">
        <span>{format(new Date(when), 'dd/MM/yyyy')}</span>
        <span>{format(new Date(when), 'HH:mm')}</span>
      </Box>
    </S.TaskCard>
  );
};
