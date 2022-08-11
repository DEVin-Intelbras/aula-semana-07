import './App.css';
import { Pessoa } from './components/Pessoa/Pessoa';

export function App() {
  const loading = false;
  const erro = false;
  const pessoas = [];

  if (loading) {
    return <p>loading...</p>;
  }

  if (erro) {
    return <p>Erro</p>;
  }

  return (
    <div>
      <header>
        <h1>Condicional exemplos</h1>
      </header>

      {pessoas.length === 0 ? (
        <p>Sem Itens</p>
      ) : (
        <ul>
          {pessoas.map((element) => (
            <Pessoa key={element.id} pessoa={element} />
          ))}
        </ul>
      )}
    </div>
  );
}
