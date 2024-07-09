import { X } from 'lucide-react';
import { Box } from '../../styles/box';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Title } from '../../styles/title';
import { Input, Select, Textarea } from '../../components';
import { Button, GhostButton } from '../../styles/button';

import { Checkbox } from './session/checkbox/Checkbox';
import { useState } from 'react';

export const Edit = () => {
  const [done, setDone] = useState<boolean>(false);
  return (
    <Content>
      <Form>
        <Box justify="space-between">
          <Title>Editar Tarefa</Title>
          <button>
            <X size={24} />
          </button>
        </Box>
        <Select label="Categoria">
          <option>Selecione</option>
        </Select>
        <Input label="Título" placeholder="Título da tarefa" type="text" />
        <Textarea
          label="Descrição"
          placeholder="Descrição da tarefa"
          rows={6}
        />
        <Input label="Data" type="datetime-local" />
        <Box align="center" justify="space-between">
          <Box>
            <Checkbox
              label="Concluída"
              onClick={() => setDone(!done)}
              checked={done}
            />
          </Box>
          <Box>
            <GhostButton type="button">Excluir</GhostButton>
            <Button>Salvar</Button>
          </Box>
        </Box>
      </Form>
    </Content>
  );
};
