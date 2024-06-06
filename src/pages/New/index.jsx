import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => {
                                return(
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { }}
                                />
                                );
                            })
                        }
                        <NoteItem
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}