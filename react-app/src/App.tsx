import { useState } from "react";

const App = () => {

  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero(2);
  }

  return (
    <div>
      <p>O número é: {numero}</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App;