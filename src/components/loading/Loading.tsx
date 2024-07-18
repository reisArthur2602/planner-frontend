import { LoaderCircle } from 'lucide-react';

import { Content } from '../../styles/content';
import * as S from './styles';

export const Loading = () => {
  return (
    <Content>
      <S.LoadingContainer>
        <LoaderCircle size={60} />
      </S.LoadingContainer>
    </Content>
  );
};
