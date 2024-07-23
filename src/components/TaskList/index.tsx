import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { TaskListProps } from './task-list';
import { TaskCard } from '../TaskCard';
import { TypeTask } from '../../types/task';
import { TYPES } from '../../utils/types';
import { Grid } from '../../styles/grid';

export const Tasklist = ({ tasks }: TaskListProps) => {
  const navigate = useNavigate();

  const navigateToEdit = (id: string) => {
    navigate(`/dashboard/task/edit/${id}`);
  };

  const getTypeIcon = (type: TypeTask) => {
    const index = TYPES.findIndex((t) => t.type === type);
    return TYPES[index].icon;
  };

  return (
    <Grid>
      {tasks.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          date={format(new Date(t.when), 'dd/MM/yyyy')}
          time={format(new Date(t.when), 'HH:mm')}
          typeIcon={getTypeIcon(t.type)}
          onNavigation={navigateToEdit}
        />
      ))}
    </Grid>
  );
};

{
  /* <span>{format(new Date(when), 'dd/MM/yyyy')}</span>
<span>{format(new Date(when), 'HH:mm')}</span> */
}
