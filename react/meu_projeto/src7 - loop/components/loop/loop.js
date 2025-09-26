
function Loop() {
  const alunos = ["Maria", "João", "Ana"];


  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

/* O .map() percorre o array e retorna um <li> para cada item.
O key={index} é obrigatório no React para identificar cada elemento da lista.
 */

export default Loop