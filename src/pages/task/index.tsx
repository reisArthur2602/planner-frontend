import * as S from './styles';

import { useState } from 'react';

import { ButtonAction, Field, GhostButton, TextArea } from '../../components';
import Checkbox from '../../components/Checkbox';
import CategoryBar from '../../components/CategoryBar';

export const Task = () => {
  const [done, setDone] = useState<boolean>(false);

  return (
    <S.Form>
      <CategoryBar />
      <Field type="text" label="Título" placeholder="Título da tarefa" />
      <TextArea
        label="Descrição"
        placeholder="Descrição da tarefa..."
        rows={6}
      />
      <Field type="date" label="Data" />
      <Field type="time" label="Hora" />

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
