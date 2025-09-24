import './App.css';

function App() {

  /* Aula 1.2 */
  let nome = 'João';
  const newName = nome.toUpperCase()

  /* Aula 1.4 */
  const url = 'https://cdn.pixabay.com/photo/2025/08/02/14/53/pied-cuckoo-9750790_960_720.jpg'

  /* Aula 1.3 */
  function soma(num1, num2) {
    return num1 + num2;
  }

  return (
    <section className="App">{/* Lembrar className */}

      {/* Aula 01.1 */}
      <h1>Ola Mundo!</h1>
      <p>Meu primeiro projeto com React</p>

      {/* Aula 1.2 */}
      <p>Meu nome é: {newName}</p>
      <p>Meu nome é: {nome}</p>

      {/* Aula 1.3 */}
      <p>1 + 1 = {soma(1, 1)}</p>

      {/* Aula 1.4 */}
      <img src={url} alt="Pied Cuckoo" />

      {/* Aula 1.5 */}

    </section>
  );
}

export default App;