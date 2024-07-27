import * as S from './style';
import { ITextarea } from './textarea';



export const Textarea = ({ label, ...props }: ITextarea) => {
  return (
    <S.TextareaContainer>
      {label}
      <S.Textarea {...props} />
    </S.TextareaContainer>
  );
};
