import { ButtonAction, Input,  } from '../../components';
import * as S from './styles';
import Qr from 'qrcode.react';
export const Sync = () => {
  return (
    <S.Container>
      <S.Box>
        <S.TitleSubtitleBox>
          <h1>Capture o QRCODE pelo app</h1>
          <p>Suas tarefas serão sincronizadas</p>
        </S.TitleSubtitleBox>
        <S.QrCodeArea>
          <Qr value="getmacaddress" size={280} />
        </S.QrCodeArea>
        <Input type="text" placeholder="Endereço Mac"/>
        <ButtonAction>Sincronizar</ButtonAction>
      </S.Box>
    </S.Container>
  );
};
