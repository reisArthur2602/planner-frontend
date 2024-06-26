import * as S from './styles';

type Props = React.ComponentProps<'input'> &
  React.ComponentProps<'textarea'> & { label?: string };

const Field = ({ label, ...rest }: Props) => {
  return (
    <S.InputContainer>
      <span>{label}</span>
      <input {...rest} />
    </S.InputContainer>
  );
};

const TextArea = ({ label, ...rest }: Props) => {
  return (
    <S.TextAreaContainer>
      <span>{label}</span>
      <textarea {...rest} />
    </S.TextAreaContainer>
  );
};

export { Field, TextArea };
