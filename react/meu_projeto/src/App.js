import './App.css';
import MeuNome from './components/props/meuNome';


function App() {
 

  return (
    <section className="App">{/* Lembrar className */}

      <MeuNome nome="Thyago" sobrenome="Almeida" idade={43} />
      <MeuNome nome="Maria" />
      <MeuNome nome="João" sobrenome="Silva" />
    </section>
  );
}

export default App;