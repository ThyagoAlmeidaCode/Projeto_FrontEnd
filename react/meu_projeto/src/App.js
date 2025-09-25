import "./App.css";
import Evento from "./components/props/evento";
import Form from "./components/formulario";

function App() {
  return (
    <section className="App">
      {/* Lembrar className */}

      <Evento numero={1} />
      <Evento numero={2} />

      <Form />
    </section>
  );
}

export default App;
