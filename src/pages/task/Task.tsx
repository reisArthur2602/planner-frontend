import { useState } from 'react';
import { Input, Textarea } from '../../components';
import { useDashboard } from '../../hooks/useDashboard';
import { TaskService } from '../../services/task/TaskService';
import { Box } from '../../styles/box';
import { Button, GhostButton } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { TypeBar } from './session/type-bar/TypeBar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Task = () => {
  const { type, toggleType } = useDashboard();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const back = () => {
    navigate('/dashboard');
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title,
      description,
      when: `${date}T${time}:00.000`,
      type,
    };

    await TaskService.create(data).then(() => {
      toast.success('Tarefa criada com sucesso!');
      toggleType('gym');
      back();
    });
  };

  return (
    <Content>
      <Form onSubmit={(e) => onSubmit(e)}>
        <TypeBar />
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
          <GhostButton type="button" onClick={back}>
            Cancelar
          </GhostButton>
          <Button>Criar</Button>
        </Box>
      </Form>
    </Content>
  );
};
