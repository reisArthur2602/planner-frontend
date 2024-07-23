import { ClipboardList } from 'lucide-react';

import * as S from './styles';
import { Content } from '../../../styles/content';

interface IEmptyTask {
  title:string
}

const EmptyTask = ({title}:IEmptyTask) => {
  return (
    <Content>
      <S.EmptyTaskContainer>
        <ClipboardList size={80} />
        <p>{title}</p>
      </S.EmptyTaskContainer>
    </Content>
  );
};

export default EmptyTask;
