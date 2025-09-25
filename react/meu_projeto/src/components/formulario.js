/* Evento submit */

function Form() {
  function cadastro(event) {
    event.preventDefault(); /* Fazer o teste antes de executar o preventDefault */

    let nome = event.target.nome.value;
    let email = event.target.email.value;
    alert("Cadastrou" + nome + " " + email);
  }


  return (
    <div>
      <h1>Formulário</h1>
      <form onSubmit={cadastro}>
        <input type="text" name="nome" />
        <input type="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
