let n1:number = 10;
let n2:number = 3;

function somar(n1: number,n2:number):number {
  return n1 + n2;
}

const App = () => {
  return (
    <div>Multiplicação: {somar(n1, n2)}</div> // {} chamado de expressão
  );
}

export default App;