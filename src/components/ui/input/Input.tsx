
import * as S from './styles';
import { IInput } from './type';

export const Input = ({ label, ...props }: IInput) => {
  return (
    <S.InputContainer>
      {label}
      <S.Input {...props} />
    </S.InputContainer>
  );
};
