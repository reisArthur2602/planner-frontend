import { Link } from 'react-router-dom';
import { Input, Layout } from '../../components';
import { Button } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Subtitle } from '../../styles/subtitle';
import { Title } from '../../styles/title';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';

export const Login = () => {
  return (
    <Layout>
      <Content>
        <Form>
          <Box direction="column" align="center">
            <Title>Entra na sua conta</Title>
            <Subtitle>Preencha o formulário para entrar na sua conta.</Subtitle>
          </Box>

          <Box direction="column">
            <Input
              label="Email"
              type="email"
              placeholder="seuemail@email.com"
            />
            <Button>Entrar</Button>
          </Box>
          <Link to="/">
            Já possui uma conta? <Highlight>Fazer Login </Highlight>
          </Link>
        </Form>
      </Content>
    </Layout>
  );
};
