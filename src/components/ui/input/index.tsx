import { IInput } from './input';
import * as S from './styles';

export const Input = ({ label, ...props }: IInput) => {
  return (
    <S.InputContainer>
      {label}
      <S.Input {...props} />
    </S.InputContainer>
  );
};
