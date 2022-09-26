import { useState } from "react";

const App = () => {

  const [n, setN] = useState(0);

  const handleClick = () => {
    alert('clicou');
  }

  const handleMinus = () => {
    setN(n-1);
  }

  const handleMore = () => {
    setN(n + 1);
    
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <div>{n}</div>
      <button onClick={handleClick}>Clique aqui</button><br/>
      <button onClick={handleMore}>+</button>
    </div>
  );
}

export default App;