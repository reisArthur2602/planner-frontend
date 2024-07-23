import * as S from './styles';

interface IInput extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const Select = ({ label, ...props }: IInput) => {
  return (
    <S.SelectContainer>
      {label}
      <S.Select {...props} />
    </S.SelectContainer>
  );
};
