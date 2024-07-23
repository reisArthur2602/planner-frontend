import { Link } from 'react-router-dom';
import { Input } from '../../components';
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
  const { handleRegister } = useAuth();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return alert('O email é obrigatório');
    await handleRegister(email);
    setEmail('');
  };

  return (
  
      <Content>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Box direction="column" align="center" gap='6px'>
            <Title>Crie sua conta</Title>
            <Subtitle>Preencha o formulário para criar sua conta</Subtitle>
          </Box>

          <Box direction="column" gap='18px'>
            <Input
              label="Email"
              type="text"
              placeholder="seuemail@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              // required
            />
            <Button>Entrar</Button>
          </Box>
          <Link to="/">
            Já possui uma conta? <Highlight>Fazer Login</Highlight>
          </Link>
        </Form>
      </Content>
    
  );
};
