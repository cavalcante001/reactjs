import { useState } from "react";
import { Pessoa } from "./components/Pessoa";
const App = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleClick}>MOSTRAR</button>
      {show &&
        <div>
          Bla bla bla...
        </div>
      }
    </div>
  );
}

export default App;