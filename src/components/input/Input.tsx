import * as S from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: IInput) => {
  return (
    <S.InputContainer>
      {label}
      <S.Input {...props} />
    </S.InputContainer>
  );
};
