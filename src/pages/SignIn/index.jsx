import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';

export function SignIn() {
  const[ email, setEmail ] = useState("");
  const[ password, setPassword ] = useState("");

  
  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Notas</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          name="email"
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
          name="password"
        />

        <Button type="submit" title="Entrar" onClick={handleSignIn}/>

        <Link to="/SignUp">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
