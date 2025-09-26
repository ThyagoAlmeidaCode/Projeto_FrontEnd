import { userState } from "react";


function Form() {

    /* Pode adiconar um valor padrao no usestate('mateus') e usar value={name} nos input  bom para qundo for editar*/
    const [name, setName] = userState();
    const [password, setPassword] = userState();

    function cadastro(event) {
        event.preventDefault(); /* Fazer o teste antes de executar o preventDefault */

        /* let nome = event.target.nome.value;
        let email = event.target.email.value; */
        /* alert("Cadastrou" + nome + " " + email); */
        console.log(name, password);
    
    }

    return (
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadastro}>

                <label htmlFor="nome">Nome:</label>
                <input type="text"  id="nome" name="nome"  placeholder="Seu nome" value={name} onChange={(event) => setName(event.target.value)}/>

                 {/* onChange={(event) => setName(event.target.value) alterar o valor do estate */}

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password"  name="password" placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
                
                />
                            
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form