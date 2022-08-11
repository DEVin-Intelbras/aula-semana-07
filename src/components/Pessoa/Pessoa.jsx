import PropTypes from 'prop-types';

export const Pessoa = ({ pessoa }) => {
  return (
    <div>
      <p>Nome: </p>
      <strong>{pessoa.nome}</strong>

      {pessoa.idade !== null && (
        <>
          <p>Idade: </p>
          <strong>{pessoa.idade}</strong>
        </>
      )}

      <p>Apelido: </p>
      <strong>{pessoa.apelido || 'Sem apelido'}</strong>
    </div>
  );
};

Pessoa.propTypes = {
  pessoa: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    apelido: PropTypes.string,
  }),
};
