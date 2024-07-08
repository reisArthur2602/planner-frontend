import * as S from './style';

interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = ({ label, ...props }: ITextarea) => {
  return (
    <S.TextareaContainer>
      {label}
      <S.Textarea {...props} />
    </S.TextareaContainer>
  );
};
