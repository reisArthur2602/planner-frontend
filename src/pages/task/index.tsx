import * as S from './styles';

import SelectType from '../../components/SelectType';
import { useState } from 'react';
import { TypesActions } from '../../utils/type';


export const Task = () => {
  const [type, setType] = useState<TypesActions>('code');
  const handleTypeClick = (type: TypesActions) => {
    setType(type);
  };

  return (
    <S.Form>
      <SelectType onClick={handleTypeClick} typeActive={type} />
    </S.Form>
  );
};
