import { CheckCircle2Icon, Circle } from 'lucide-react';
import * as S from './styles';

type Props = React.ComponentProps<'input'> & {
  label: string;
  checked: boolean;
};

const Checkbox = ({ label, checked, ...rest }: Props) => {
  return (
    <S.CheckboxArea>
      {checked ? <CheckCircle2Icon size={20}/> : <Circle size={20}/>}
      <input type="checkbox" {...rest} checked={checked} />
      <span>{label}</span>
    </S.CheckboxArea>
  );
};

export default Checkbox;
