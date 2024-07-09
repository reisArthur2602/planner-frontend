import { X } from 'lucide-react';
import { Box } from '../../styles/box';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Title } from '../../styles/title';
import { Input, Select, Textarea } from '../../components';
import { Button, GhostButton } from '../../styles/button';
import { Checkbox } from './session/checkbox/Checkbox';
import { useEffect, useState } from 'react';
import { TaskService } from '../../services/task/TaskService';
import { Task, TypeTask } from '../../types/task';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export const Edit = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task>();
  const [type, setType] = useState<TypeTask>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [when, setWhen] = useState('');
  const [done, setDone] = useState<boolean>();

  const fetchTask = async () => {
    await TaskService.getById(id as string).then((response) => {
      setTask(response);
      setTitle(response.title);
      setDescription(response.description);
      setWhen(format(new Date(response.when), "yyyy-MM-dd'T'HH:mm"));
      setType(response.type);
      setDone(response.done);
    });
  };

  useEffect(() => {
    fetchTask();
  }, []);
  console.log(task);

  return (
    <Content>
      <Form>
        <Box justify="space-between">
          <Title>Editar Tarefa</Title>
          <button>
            <X size={24} />
          </button>
        </Box>
        <Select
          label="Categoria"
          onChange={(e) => setType(e.target.value as TypeTask)}
          value={type}
        >
          <option>Selecione</option>
          <option value="study">Estudos</option>
          <option value="gym">Academia</option>
          <option value="work">Trabalho</option>
          <option value="personal">Pessoal</option>
          <option value="travel">Viagem</option>
        </Select>
        <Input
          label="Título"
          placeholder="Título da tarefa"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <Textarea
          label="Descrição"
          placeholder="Descrição da tarefa"
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          label="Data"
          type="datetime-local"
          onChange={(e) => setWhen(e.target.value)}
          value={when}
        />
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
