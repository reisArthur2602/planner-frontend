import { Circle, CircleCheck } from 'lucide-react';
import * as S from './styles';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, checked, ...rest }: ICheckbox) => {
  return (
    <S.CheckBoxContainer>
      <input type="checkbox" {...rest} />
      {checked ? <CircleCheck size={18} /> : <Circle size={18} />}
      <>{label}</>
    </S.CheckBoxContainer>
  );
};
