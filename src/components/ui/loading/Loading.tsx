import { LoaderCircle } from 'lucide-react';

import * as S from './styles';
import { Content } from '../../../styles/content';

export const Loading = () => {
  return (
    <Content>
      <S.LoadingContainer>
        <LoaderCircle size={60} />
      </S.LoadingContainer>
    </Content>
  );
};
