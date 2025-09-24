import styles from './meuNome.module.css'
import PropTypes from 'prop-types'


/* function MeuNome(props) {
    return (
        <div>
            <p>Meu nome é: {props.nome}</p>
        </div>
    );
} */



/* function MeuNome({nome, sobrenome}) {
    return (
        <div className={styles.meuNome}>
            <p>Meu nome é: {nome}</p>
            <p>Meu sobrenome é: {sobrenome}</p>
        </div>
    );
}
 */

/* Definindo tipos */


function MeuNome({nome, sobrenome, idade}) {
    return (
        <div className={styles.meuNome}>
            <p>Meu nome é: {nome}</p>
            <p>Meu sobrenome é: {sobrenome}</p>
            <p>Minha Idade é: {idade}</p>
        </div>
    );
}

MeuNome.propTypes = {
    nome: PropTypes.string.isRequired,
    sobrenome: PropTypes.string,
    idade: PropTypes.number
}

export default MeuNome