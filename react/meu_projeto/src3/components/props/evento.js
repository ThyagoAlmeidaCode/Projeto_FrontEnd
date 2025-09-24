import styles from "./evento.module.css";

function Evento() {
  function clicou() {
    alert("Clicou");
  }

  return (
    <div className={styles.meuNome}>
      <button onClick={clicou}>Clique aqui</button>
    </div>
  );
}

export default Evento;
