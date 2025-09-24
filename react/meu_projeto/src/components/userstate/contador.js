import { useState } from "react";

function Contador() {
   const [num, setNum] = useState(0);

   function contador() {
       setNum(num + 1);
   }

    return (
        <> 
            <h1>Você clicou {num} vezes</h1>
            <button onClick={contador}>Clique aqui</button>
        </>
    );
}

export default Contador