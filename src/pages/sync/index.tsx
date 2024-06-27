import { ButtonAction, Field } from '../../components';
import * as S from './styles';

export const Sync = () => {
  return (
    <S.Container>
      <S.Box>
        <S.TitleSubtitleBox>
          <h1>Capture o QRCODE pelo app</h1>
          <p>Suas tarefas serão sincronizadas</p>
        </S.TitleSubtitleBox>
        <S.QrCodeArea>
          ...
        </S.QrCodeArea>
        <Field type='text' placeholder='Endereço Mac'/>
        <ButtonAction>Sincronizar</ButtonAction>
      </S.Box>
    </S.Container>
  );
};
