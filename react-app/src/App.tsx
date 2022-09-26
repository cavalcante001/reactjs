import { Button } from './components/Button';
const App = () => {

  const handleButtonEvent = (text: string) => {
    alert('Frase do app: ' +text)
  }

  return (
    <div>
      <Button text="Clique aqui" fnButton={handleButtonEvent}/>
    </div>
  );
}

export default App;