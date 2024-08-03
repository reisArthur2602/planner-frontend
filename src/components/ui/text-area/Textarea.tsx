import * as S from './styles';
import { ITextarea } from './type';

export const TextArea = ({ label, ...props }: ITextarea) => {
  return (
    <S.TextareaContainer>
      {label}
      <S.Textarea {...props} />
    </S.TextareaContainer>
  );
};
