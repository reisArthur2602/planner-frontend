import { Link } from 'react-router-dom';

import { Button } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Subtitle } from '../../styles/subtitle';
import { Title } from '../../styles/title';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/input/Input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const { handleLogin } = useAuth();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return alert('O email é obrigatório');
    await handleLogin(email);
    setEmail('');
  };

  return (
    <Content>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Box direction="column" align="center" gap="6px">
          <Title>Entra na sua conta</Title>
          <Subtitle>Preencha o formulário para entrar na sua conta.</Subtitle>
        </Box>

        <Box direction="column" gap="18px">
          <Input
            label="Email"
            type="text"
            placeholder="seuemail@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button>Entrar</Button>
        </Box>
        <Link to="/register">
          Não possui uma conta? <Highlight>Fazer Cadastro</Highlight>
        </Link>
      </Form>
    </Content>
  );
};

export default Login;
