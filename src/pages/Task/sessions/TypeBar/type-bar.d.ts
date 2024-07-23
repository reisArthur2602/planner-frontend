import { TypeTask } from '../../../../@types/task';
import { TypeData } from '../../../../utils/types';


export type TypeBarProps = {
  types: TypeData[];
  type: TypeTask;
  onChange: (type: TypeTask) => void;
};
