import { ButtonAction, GhostButton, Input, Textarea } from '../../components';
import CategoryBar from '../../components/CategoryBar';
import Checkbox from '../../components/Checkbox';
import * as S from './styles';

import { useState } from 'react';

export const Task = () => {
  const [done, setDone] = useState<boolean>(false);

  return (
    <S.Form>
      <CategoryBar />
      <Input type="text" label="Título" placeholder="Título da tarefa" />
      <Textarea
        label="Descrição"
        placeholder="Descrição da tarefa..."
        rows={6}
      />
      <Input type="date" label="Data" />
      <Input type="time" label="Hora" />

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
