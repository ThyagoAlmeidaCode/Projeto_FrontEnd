import Frase from './frase';
import MeuNome from './meuNome';

function Hello() {
    return (
        <> {/* Fragents - usar para poluir menos o HTML */}
            <Frase />
            <h1>Hello World</h1>
            <Frase />

            <MeuNome nome="João" />
            <MeuNome sobrenome={6} />
        </>
    );
}

export default Hello