import { Input, Textarea } from '../../components';
import { Box } from '../../styles/box';
import { Button, GhostButton } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { TypeBar } from './session/type-bar/TypeBar';

export const Task = () => {
  return (
    <Content>
      <Form>
        <TypeBar />
        <Input label="Título" placeholder="Título da tarefa" type="text" />
        <Textarea
          label="Descrição da tarefa"
          placeholder="Descrição da tarefa..."
          rows={5}
        />
        <Input label="Data" type="date" />
        <Input label="Hora" type="time" />
        <Box justify="end">
          <GhostButton type="button">Cancelar</GhostButton>
          <Button>Criar</Button>
        </Box>
      </Form>
    </Content>
  );
};
