import styles from './primeirocomponente.module.css'

function PrimeiroComponente() {
    return (
        <div className={styles.meuNome}>
            <p>Meu nome é Thaygo</p>
            <p>Meu sobrenome é: Almeida</p>
            <p>Minha Idade é: 43</p>
        </div>
    );
}
export default PrimeiroComponente