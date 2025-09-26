
import { useState } from "react";
import styles from "./todo.module.css";

function Todo() {
  const [tarefas, setTarefas] = useState([]); // começa vazio
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editId, setEditId] = useState(null);

  // Inserir
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = {
      id: Date.now(),
      titulo: novaTarefa,
      concluida: false,
    };
    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  // Excluir
  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Editar
  const editarTarefa = (id, titulo) => {
    setNovaTarefa(titulo);
    setEditId(id);
  };

  // Salvar edição
  const salvarEdicao = () => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === editId ? { ...tarefa, titulo: novaTarefa } : tarefa
      )
    );
    setNovaTarefa("");
    setEditId(null);
  };

  // Alternar concluída
  const alternarConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };


  return (
    <div className={styles.container}>
      <h2>Lista de Tarefas</h2>

      <div className={styles.input_area}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />

        {editId === null ? (
          <button onClick={adicionarTarefa} className={styles.add_btn}>
            Adicionar
          </button>
        ) : (
          <button onClick={salvarEdicao} className={styles.save_btn}>
            Salvar
          </button>
        )}
      </div>

      {tarefas.length === 0 ? (
        <p className={styles.empty}>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        <ul className={styles.lista}>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={styles.item}>
              <span
                onClick={() => alternarConcluida(tarefa.id)}
                className={tarefa.concluida ? styles.concluida : ""}
              >
                {tarefa.titulo}
              </span>
              <div className={styles.actions}>
                <button
                  onClick={() => editarTarefa(tarefa.id, tarefa.titulo)}
                  className={styles.edit_btn}
                >
                  Editar
                </button>
                <button
                  onClick={() => excluirTarefa(tarefa.id)}
                  className={styles.delete_btn}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>


      )}
    </div>
  );
}



export default Todo