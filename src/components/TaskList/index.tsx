import { getCategoryIcon } from '../../utils/getCategoryIcon';

import * as S from './styles';

const TaskList = () => {
  return (
    <S.TaskListContainer>
      <h1>Minhas Tarefas</h1>

      <S.TaskListArea>
        <S.TaskListItem>
          <S.TaskIcon>{getCategoryIcon('gym')}</S.TaskIcon>
          <h4>Titulo da tarefa</h4>
          <S.TaskInfo>
            <span>27/06/2027</span>
            <span>18:00</span>
          </S.TaskInfo>
        </S.TaskListItem>
      </S.TaskListArea>
    </S.TaskListContainer>
  );
};

export default TaskList;
