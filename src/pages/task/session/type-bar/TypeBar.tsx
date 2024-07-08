import { useDashboard } from '../../../../hooks/useDashboard';
import { Box } from '../../../../styles/box';
import { Icon } from '../../../../styles/icon';
import { typeData } from '../../../../utils/task/TypeData';
import * as S from './style';
export const TypeBar = () => {
  const { type, toggleType } = useDashboard();
  return (
    <Box justify="space-between">
      {typeData.map((t) => (
        <S.TypeButton
          key={t.type}
          active={type === t.type}
          onClick={() => toggleType(t.type)}
          type="button"
        >
          <Icon>{t.icon}</Icon>
        </S.TypeButton>
      ))}
    </Box>
  );
};
