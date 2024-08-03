import { Box } from '../../../../styles/box';
import TypeIcon from '../type-icon/TypeIcon';


import { TypeBarProps } from './type';

export const TypeBar = ({ type, types, onChange }: TypeBarProps) => {
  return (
    <Box justify="space-between">
      {types.map((t) => (
        <TypeIcon
          key={t.type}
          icon={t.icon}
          type={t.type}
          selected={t.type === type}
          onChange={onChange}
        />
      ))}
    </Box>
  );
};
