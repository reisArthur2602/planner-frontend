import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { TypeTask } from '../../types/task';
import { TYPES } from '../../utils/types';
import { TaskService } from '../../services/task/TaskService';
import { Input, Textarea } from '../../components';
import { Box } from '../../styles/box';
import { Button, GhostButton } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { TypeBar } from './sessions/TypeBar';

export const Task = () => {
  const [type, setType] = useState<TypeTask>('gym');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formatToIso = new Date(`${date}T${time}:00.000`).toISOString();

    await TaskService.create({
      title,
      description,
      when: formatToIso,
      type,
    });

    toast.success('Tarefa criada com sucesso!');
    navigate('/dashboard');
  };

  return (
    <Content>
      <Form onSubmit={(e) => onSubmit(e)}>
        <TypeBar type={type} types={TYPES} onChange={setType} />
        <Input
          label="Título"
          placeholder="Título da tarefa"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Textarea
          label="Descrição da tarefa"
          placeholder="Descrição da tarefa..."
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          label="Data"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <Input
          label="Hora"
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
        <Box justify="end">
          <GhostButton type="button" onClick={() => navigate('/dashboard')}>
            Cancelar
          </GhostButton>

          <Button>Criar</Button>
        </Box>
      </Form>
    </Content>
  );
};
