import { Header } from './components/Header';
import { Image } from './components/Image';

const App = () => {
  return (
    <div>
      <Header title="Título 1"/>
      <Image legend="Logo do google">
        <img src="https://www.google.com.br/logos/google.jpg"></img>
      </Image>

      Olá mundo
    </div>
  );
}

export default App;