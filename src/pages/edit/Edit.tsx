import { X } from 'lucide-react';
import { Box } from '../../styles/box';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Title } from '../../styles/title';
import { Input, Loading, Select, TextArea,  } from '../../components';
import { Button, GhostButton } from '../../styles/button';
import { Checkbox } from './sessions/checkout/Checkout';
import { useEffect, useState } from 'react';
import { TaskService } from '../../services/task/TaskService';
import { TypeTask } from '../../types/task';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

export const Edit = () => {
  const { id } = useParams();
  const Redirect = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [type, setType] = useState<TypeTask>('food');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [when, setWhen] = useState('');
  const [done, setDone] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await TaskService.update({
      id: id as string,
      description,
      title,
      type,
      done,
      when: new Date(`${when}:00.000`).toISOString(),
    }).then(() => {
      toast.success('Tarefa atualizada com sucesso!');
      Redirect('/dashboard');
    });
  };

  const handleDelete = async () => {
    await TaskService.remove({ id: id as string }).then(() => {
      toast.success('Tarefa foi excluída com sucesso!');
      Redirect('/dashboard');
    });
  };

  useEffect(() => {
    (async () =>
      await TaskService.getById(id as string).then((response) => {
        setTitle(response.title);
        setDescription(response.description);
        setWhen(format(new Date(response.when), "yyyy-MM-dd'T'HH:mm"));
        setType(response.type);
        setDone(response.done);
        setLoading(false);
      }))();
  }, []);

  if (loading) return <Loading />;

  return (
    <Content>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Box justify="space-between">
          <Title>Editar Tarefa</Title>
          <button type="button" onClick={() => Redirect('/dashboard')}>
            <X size={24} />
          </button>
        </Box>
        <Select
          label="Categoria"
          onChange={(e) => setType(e.target.value as TypeTask)}
          value={type}
        >
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

        <TextArea
          label="Descrição"
          placeholder="Descrição da tarefa"
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          label="Data e Hora"
          type="datetime-local"
          onChange={(e) => setWhen(e.target.value)}
          value={when}
        />
        <Box align="center" justify="space-between">
          <Box>
            <Checkbox
              label="Concluída"
              onChange={() => setDone(!done)}
              checked={done}
            />
          </Box>
          <Box>
            <GhostButton type="button" onClick={handleDelete}>
              Excluir
            </GhostButton>
            <Button>Salvar</Button>
          </Box>
        </Box>
      </Form>
    </Content>
  );
};
