import { Fragment } from 'react';
import './App.css';
import { Pessoa } from './components/Pessoa/Pessoa';

export function App() {
  const pessoas = [
    { id: 1, nome: 'Anderson', idade: 20, apelido: 'Ola' },
    { id: 2, nome: 'Thais', idade: 20 },
    { id: 3, nome: 'Leandro', idade: 20 },
  ];

  const onClick = (event, id) => {
    console.log(event, id);
  };

  return (
    <ul>
      {pessoas.map((pessoa) => {
        return (
          <li key={pessoa.id}>
            <p>{pessoa.nome}</p>
            <p>{pessoa.idade}</p>

            {pessoa.apelido && <p>{pessoa.apelido}</p>}

            <button onClick={(event) => onClick(event, pessoa.id)}>Com parametro</button>
            <br />
            <button onClick={onClick}>Sem parametro</button>
          </li>
        );
      })}
      <br />
      <hr />
      <br />
      {pessoas.map((pessoa) => {
        return <Pessoa key={`pessoa-${pessoa.id}`} pessoa={pessoa} />;
      })}
    </ul>
  );
}
