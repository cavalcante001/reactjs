import { useState, useEffect, ChangeEventHandler, ChangeEvent } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(`${name} ${lastName}`);    
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName( e.target.value )
  }
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName( e.target.value );
  }
  
  return (
    <div className='flex flex-col'>
      <input type="text" placeholder="Digite seu nome" value={name} onChange={handleNameChange}/>
      <input type="text" placeholder="Digite seu sobrenome" value={lastName} onChange={handleLastNameChange} />
      <p>Nome Completo {fullName};</p>
    </div>
  );
}

export default App;