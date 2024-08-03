import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';

import { EmptyTask } from '../../components/ui/empty-task/EmptyTask';
import { useTask } from '../../hooks/useTask';
import { Loading } from '../../components/ui/loading/Loading';
import { Tasklist } from '../../components/task-list/TaskList';

const Late = () => {
  const { lateTasks, lateCount, loading } = useTask();

  if (loading) return <Loading />;
  return (
    <Box direction="column" gap="24px">
      {lateCount === 0 ? (
        <EmptyTask title="Você não possui nenhuma tarefa atrasada" />
      ) : (
        <>
          <Title>
            Tarefas Atrasadas <Highlight>{`(${lateCount})`}</Highlight>
          </Title>
          <Tasklist tasks={lateTasks} />
        </>
      )}
    </Box>
  );
};

export default Late;
