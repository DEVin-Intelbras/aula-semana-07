import PropType from 'prop-types';

import './Botao.css';

export const Botao = ({ children, onClick }) => {
  console.log(children);
  return (
    <button className='minhaClasse' onClick={onClick}>
      {children}
    </button>
  );
};

Botao.propTypes = {
  children: PropType.node.isRequired,
  onClick: PropType.func.isRequired,
};
