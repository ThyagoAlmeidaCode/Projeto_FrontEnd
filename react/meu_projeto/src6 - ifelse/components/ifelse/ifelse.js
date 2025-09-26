
function Condicao() {

    const logado = true;

    return (
        <div>
            {/* If ternario */}
            <h1>{logado ? "Bem-vindo, usuário!" : "Faça login para continuar."}</h1>
        </div>
    );
}

/* const logado = true;
  let mensagem;

  if (logado) {
    mensagem = "Bem-vindo, usuário!";
  } else {
    mensagem = "Faça login para continuar.";
  }

  return (
    <div>
      <h1>{mensagem}</h1>
    </div>
  );
} */

export default Condicao