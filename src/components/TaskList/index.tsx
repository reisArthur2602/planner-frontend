import { getCategoryIcon } from '../../utils/getCategoryIcon';

import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useGetTask } from '../../hooks/useGetTask';
import * as S from './styles';

const TaskList = () => {
  const { tasks } = useGetTask();

  return (
    <S.TaskListContainer>
      <h1>Minhas Tarefas</h1>
      <S.TaskListArea>
        {tasks.map((t) => (
          <S.TaskListItem key={t.id}>
            <Link to={`/task/${t.id}`}>
              <S.TaskIcon>{getCategoryIcon('gym')}</S.TaskIcon>
              <h4>{t.title}</h4>
              <S.TaskInfo>
                <span>{format(new Date(t.when), 'dd/MM/yyyy')}</span>
                <span>{format(new Date(t.when), 'HH:mm')}</span>
              </S.TaskInfo>
            </Link>
          </S.TaskListItem>
        ))}
      </S.TaskListArea>
    </S.TaskListContainer>
  );
};

export default TaskList;
