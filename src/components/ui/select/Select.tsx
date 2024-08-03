
import * as S from './styles';
import { ISelect } from './type';

export const Select = ({ label, ...props }: ISelect) => {
  return (
    <S.SelectContainer>
      {label}
      <S.Select {...props} />
    </S.SelectContainer>
  );
};
