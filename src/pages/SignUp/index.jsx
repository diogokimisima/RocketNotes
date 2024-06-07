import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso");
        setTimeout(() => {
          navigate("/");
        }, 2000); 
      })
      .catch(error => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar");
        }
      });
  }

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
          onChange={e => setName(e.target.value)}
          name="name"
        />

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

        <Button type="submit" title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o Login</Link>
      </Form>

      <ToastContainer />
    </Container>
  );
}
