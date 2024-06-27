import * as S from './styles';

import SelectType from '../../components/SelectType';
import { useState } from 'react';
// import { TypesActions } from '../../types/task';
import { ButtonAction, Field, GhostButton, TextArea } from '../../components';
import Checkbox from '../../components/Checkbox';

export const Task = () => {
  const [done, setDone] = useState<boolean>(false);
  // const [type, setType] = useState<TypesActions>('code');
  // const handleTypeClick = (type: TypesActions) => {
  //   setType(type);
  // };

  return (
    <S.Form>
      {/* <SelectType onClick={handleTypeClick} typeActive={type} /> */}
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
