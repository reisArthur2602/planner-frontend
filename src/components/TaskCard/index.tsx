import * as S from './styles';
import { useMemo } from 'react';
import { format } from 'date-fns/format';
import { Icons, TypesActions } from '../../utils/type';

interface ITaskCard {
  id: string;
  type: TypesActions;
  title: string;
  when: string;
}

const TaskCard = ({ id, title, type, when }: ITaskCard) => {
  const typeIcon = Icons.find((i) => i.type === type);

  const date = format(new Date(when), 'dd/MM/yyyy');
  const hour = format(new Date(when), 'HH:mm');

  return (
    <S.Container to={`/task/${id}`}>
      <img
        src={typeIcon?.icon}
        alt="Categoria da tarefa"
        width={60}
        height={60}
      />
      <h4>{title}</h4>
      <div>
        <span>{date}</span>
        <span>{hour}</span>
      </div>
    </S.Container>
  );
};

export default TaskCard;
