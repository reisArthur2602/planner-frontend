import * as S from './styles';

import SelectType from '../../components/SelectType';
import { useState } from 'react';
import { TypesActions } from '../../utils/type';
import { Field, GhostButton, TextArea } from '../../components';
import Checkbox from '../../components/Checkbox';

export const Task = () => {
  const [type, setType] = useState<TypesActions>('code');
  const [done, setDone] = useState<boolean>(false);
  const handleTypeClick = (type: TypesActions) => {
    setType(type);
  };

  return (
    <S.Form>
      <SelectType onClick={handleTypeClick} typeActive={type} />
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
    </S.Form>
  );
};
