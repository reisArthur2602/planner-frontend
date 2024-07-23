import { Icon } from '../../../../styles/icon';
import { TypeIconProps } from './type-icon';
import * as S from '../TypeIcon/styles';

const TypeIcon = ({ icon, selected, type, onChange }: TypeIconProps) => {
  return (
    <S.TypeButton type='button' active={selected} onClick={() => onChange(type)} >
      <Icon>{icon}</Icon>
    </S.TypeButton>
  );
};

export default TypeIcon;
