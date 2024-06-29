import { useContext, useState } from 'react';
import { useTask } from '../../hooks/useTask';
import { ButtonAction, GhostButton, Input, Textarea } from '../../components';
import CategoryBar from '../../components/CategoryBar';
import Checkbox from '../../components/Checkbox';
import { TaskContext } from '../../context/TaskContext';
import * as S from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskSchema } from '../../schemas/taskSchema';
import { TaskFormProps } from '../../types/task';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

export const Task = () => {
  const { category } = useContext(TaskContext);
  const { create } = useTask();
  const [done, setDone] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TaskFormProps>({
    resolver: zodResolver(TaskSchema),
  });

  const onSubmit = async (data: TaskFormProps) => {
    const { date, time, description, title } = data;

    const formatData = {
      type: category,
      title,
      description,
      when: `${date}T${time}:00.000`,
    };

    try {
      await create(formatData).then(() => {
        reset();
        navigate('/');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <CategoryBar />
      <Input
        type="text"
        label="Título"
        placeholder="Título da tarefa"
        {...register('title')}
      />
      <Textarea
        label="Descrição"
        placeholder="Descrição da tarefa..."
        rows={6}
        {...register('description')}
      />
      <Input type="date" label="Data" {...register('date')} />
      <Input type="time" label="Hora" {...register('time')} />

      <S.ButtonsArea>
        <Checkbox
          label="Concluir"
          checked={done}
          onChange={() => setDone(!done)}
        />
        <GhostButton type="button">Excluir</GhostButton>
      </S.ButtonsArea>
      <ButtonAction>Salvar</ButtonAction>
    </S.Form>
  );
};
