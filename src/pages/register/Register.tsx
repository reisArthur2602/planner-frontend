import { Link } from 'react-router-dom';
import { Input, Layout } from '../../components';
import { Button } from '../../styles/button';
import { Content } from '../../styles/content';
import { Form } from '../../styles/form';
import { Subtitle } from '../../styles/subtitle';
import { Title } from '../../styles/title';
import { Box } from '../../styles/box';
import { Highlight } from '../../styles/highlight';
import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

export const Register = () => {
  const [email, setEmail] = useState('');


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return alert('O email é obrigatório');
   
  };

  return (
    <Layout>
      <Content>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Box direction="column" align="center">
            <Title>Crie sua conta</Title>
            <Subtitle>Preencha o formulário para criar sua conta</Subtitle>
          </Box>

          <Box direction="column">
            <Input
              label="Email"
              type="text"
              placeholder="seuemail@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              // required
            />
            <Button>Cadastrar</Button>
          </Box>
          <Link to="/">
            Já possui uma conta? <Highlight>Fazer Login</Highlight>
          </Link>
        </Form>
      </Content>
    </Layout>
  );
};
