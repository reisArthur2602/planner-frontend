import typeIcons from '../../utils/typeIcons';
import * as S from './styles';
import { useMemo } from 'react';
import { format } from 'date-fns/format';

interface ITaskCard {
  id: string;
  type: number;
  title: string;
  when: string;
}

const TaskCard = ({ id, title, type, when }: ITaskCard) => {
  const date: string = useMemo(
    () => format(new Date(when), 'dd/MM/yyyy'),
    [when]
  );
  const hour: string = useMemo(() => format(new Date(when), 'HH:mm'), [when]);

  return (
    <S.Container to={`/task/${id}`}>
      <img
        src={typeIcons[type]}
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
