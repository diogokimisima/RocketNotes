import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';


import { ButtonText } from '../../components/ButtonText';



export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);
    
      if (alreadySelected) {
        const filteredTags = tagsSelected.filter(tag => tag !== tagName);
        setTagSelected(filteredTags);

      } else {
        setTagSelected(prevState => [...prevState, tagName])
      }

  }



  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);

    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText
          title="Todos"
          isActive={tagsSelected.length === 0}
          onClick={() => handleTagSelected("All")}
        />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rockeseat' },
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}