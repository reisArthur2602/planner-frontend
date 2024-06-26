import { Icons, TypesActions } from '../../utils/type';

interface ISelectType {
  typeActive: TypesActions;
  onClick: (type: TypesActions) => void;
}

import * as S from './styles';

const SelectType = ({ typeActive, onClick }: ISelectType) => {
  return (
    <S.TypesArea>
      {Icons.map((t) => (
        <S.ButtonIcon
          type="button"
          onClick={() => onClick(t.type)}
          key={t.type}
          active={typeActive === t.type ? 'true' : 'false'}
        >
          <img src={t.icon} alt={t.type} />
        </S.ButtonIcon>
      ))}
    </S.TypesArea>
  );
};

export default SelectType;
