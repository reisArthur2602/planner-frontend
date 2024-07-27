import { ISelect } from './select';
import * as S from './styles';

export const Select = ({ label, ...props }: ISelect) => {
  return (
    <S.SelectContainer>
      {label}
      <S.Select {...props} />
    </S.SelectContainer>
  );
};
