import * as S from './styles';

import SelectType from '../../components/SelectType';
import { useState } from 'react';
import { TypesActions } from '../../utils/type';
import { Field, TextArea } from '../../components/Input';

export const Task = () => {
  const [type, setType] = useState<TypesActions>('code');
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
    </S.Form>
  );
};
