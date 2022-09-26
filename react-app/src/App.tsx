const App = () => {

  const handleClick = () => {
    alert('Clicou!');
  }

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App;