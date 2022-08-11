import PropTypes from 'prop-types';

import './post.css';

import capaDefault from '../../assets/vite.svg';
import { Botao } from '../Botao/Botao';

export const Post = ({
  post: { titulo = 'Sem titulo informado', capa = capaDefault, descricao, data, handleClick },
}) => {
  return (
    <div className='main'>
      <h2>{titulo}</h2>

      <p>{data}</p>

      <img src={capa} width={600} alt='Imagem de capa do post' />

      <p>{descricao}</p>

      <Botao onClick={handleClick}>
        <div>
          Enviar
          <h1>sass</h1>
        </div>
        <div>asjnajsn</div>
      </Botao>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    titulo: PropTypes.string,
    capa: PropTypes.string,
    descricao: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
  }),
};
