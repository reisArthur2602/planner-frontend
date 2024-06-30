import { ButtonAction, GhostButton, Input, Textarea } from '../../components';

import CategoryBar from '../../components/CategoryBar';
import Checkbox from '../../components/Checkbox';
import { useCreateTask } from '../../hooks/useCreateTask';

import * as S from './styles';
import { useState } from 'react';

export const Task = () => {
  const { errors, handleSubmit, onSubmit, register } = useCreateTask();
  const [done, setDone] = useState<boolean>(false);
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <CategoryBar />
      <Input
        type="text"
        label="Título"
        placeholder="Título da tarefa"
        {...register('title')}
        helptext={errors.title?.message}
      />
      <Textarea
        label="Descrição"
        placeholder="Descrição da tarefa..."
        rows={6}
        {...register('description')}
        helptext={errors.description?.message}
      />
      <Input
        type="date"
        label="Data"
        {...register('date')}
        helptext={errors.date?.message}
      />
      <Input
        type="time"
        label="Hora"
        {...register('time')}
        helptext={errors.time?.message}
      />

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
