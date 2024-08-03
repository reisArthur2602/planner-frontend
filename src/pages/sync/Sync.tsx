import { QRCodeSVG } from 'qrcode.react';
import { Box } from '../../styles/box';
import { Title } from '../../styles/title';
import { useAuth } from '../../hooks/useAuth';
import { Content } from '../../styles/content';

const Sync = () => {
  const { user } = useAuth();

  return (
    <Content>
      <Box direction="column" gap="24px" justify="center" align="center">
        <Box direction="column" gap="6px">
          <Title>Capture o QRCODE pelo app</Title>
          <p>Suas tarefas serão sincronizadas</p>
        </Box>

        {user && (
          <QRCodeSVG
            value={user.email}
            size={320}
            bgColor="#E2DDFE"
            fgColor="#14121F"
            style={{ padding: '16px', backgroundColor: '#E2DDFE' }}
          />
        )}
      </Box>
    </Content>
  );
};
export default Sync;
