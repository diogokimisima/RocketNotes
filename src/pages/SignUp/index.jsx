import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          name="name"
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          name="email"
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          name="password"
        />

        <Button type="submit" title="Cadastrar" />

        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}
