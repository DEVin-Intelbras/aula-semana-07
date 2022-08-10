import './App.css';
import { Post } from './components/Post/Post';

import capaPost1 from './assets/capa.jpeg';
import capaPost2 from './assets/vite.svg';
import { Card } from './components/Card/Card';
import { Layout } from './components/Layout/Layout';

export function App() {
  const onClick = (event) => {
    console.log(event);
    console.log('Clicou');
  };

  return (
    <Layout>
      <Card>
        <h1>Meu Card</h1>
        <p>Teste</p>
        <footer>Rodapé</footer>
      </Card>
      <br />
      <Card>
        <img src={capaPost1} alt='aas' />
        <p>Teste</p>
      </Card>

      <Post
        titulo='Minha matéria'
        descricao='ljansjansjans janjnkjansjansjansjk ja sja '
        capa={capaPost1}
        data={new Date().toLocaleDateString()}
        handleClick={onClick}
      />

      <Post
        titulo='Nossa matéria'
        descricao='saslokomiwq w asuhhu auhsuashua iqjwioqjwiqw'
        capa={capaPost2}
        handleClick={() => console.log('arrow')}
      />

      <Post descricao='aksjaiksjka saksjkajsaks' handleClick={onClick} />
    </Layout>
  );
}
