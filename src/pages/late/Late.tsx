import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';
import { Loading, Tasklist } from '../../components';
import EmptyTask from '../../components/ui/empty-task/EmptyTask';
import { useLate } from '../../hooks/useLate';

export const Late = () => {
  const { tasks, lateCount, loading } = useLate();
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
          <Tasklist tasks={tasks} />
        </>
      )}
    </Box>
  );
};
