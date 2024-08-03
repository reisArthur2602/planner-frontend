import { Box } from '../../styles/box';
import { Icon } from '../../styles/icon';
import { TaskCardProps } from './type';
import * as S from './styles';

export const TaskCard = ({
  task,
  date,
  time,
  onNavigation,
  typeIcon,
}: TaskCardProps) => {
  return (
    <S.TaskCard onClick={() => onNavigation(task.id)} done={task.done}>
      <Icon>{typeIcon}</Icon>
      <h4>{task.title}</h4>
      <Box justify="space-between">
        <span>{date}</span>
        <span>{time}</span>
      </Box>
    </S.TaskCard>
  );
};
