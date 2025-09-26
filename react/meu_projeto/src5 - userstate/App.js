import "./App.css";
import Contador from "./components/userstate/contador";
import Form from "./components/formulario/form";

function App() {
  return (
    <section className="App">
      {/* Lembrar className */}
      
      <Contador />
      <Form />
    </section>
  );
}

export default App;
