import { Box } from '../../styles/box';
import { Content } from '../../styles/content';
import { Title } from '../../styles/title';

export const Sync = () => {
  return (
    <Content>
      <Box direction="column" gap="24px" justify='center' align='center'>
        <Box direction="column" gap="6px">
          <Title>Capture o QRCODE pelo app</Title>
          <p>Suas tarefas serão sincronizadas</p>
        </Box>
      </Box>
    </Content>
  );
};
