import { Pessoa } from "./components/Pessoa";
const App = () => {

  const lista = [
    {name: 'Paulo', age:23},
    {name: 'Andreia',age:38},
    {name: 'João', age:60},
    {name: 'Rosana', age: 43}
  ];

  return (
    <div>
      {lista.map((item, index) => (
        <Pessoa key={index} data={item}/>
      ))}
    </div>
  );
}

export default App;