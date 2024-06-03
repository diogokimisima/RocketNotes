import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Sections";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>  
          <ButtonText title="excluir nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, reiciendis. Libero impedit optio excepturi eum facere recusandae repellendus accusamus perspiciatis fuga quos. Cupiditate esse facere error asperiores reiciendis iure odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias autem asperiores doloribus ullam quisquam, explicabo velit quos quis dignissimos reprehenderit, sapiente dolorum perspiciatis qui blanditiis nobis. Fugiat illum laudantium delectus?</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}