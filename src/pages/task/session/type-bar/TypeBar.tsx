import { useDashboard } from '../../../../hooks/useDashboard';
import { Box } from '../../../../styles/box';
import { Icon } from '../../../../styles/icon';
import { TYPES } from '../../../../utils/types';

import * as S from './style';
export const TypeBar = () => {
  const { type, toggleType } = useDashboard();
  return (
    <Box justify="space-between">
      {TYPES.map((t) => (
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
