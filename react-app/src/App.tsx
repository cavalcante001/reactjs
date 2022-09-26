import React, { ChangeEvent, useState } from "react";

const App = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setName(event.target.value);
  }

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setLastName(event.target.value);
  }

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setAge(+event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" onChange={handleName}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" onChange={handleLastName}/>
      </div>

      <div>
        Idade:
        <input type="text" onChange={handleAge} />
      </div>

      <hr/>

      <p>Olá {`${name} ${lastName}`}, tudo bem?</p>
      <p>Você tem {age} anos.</p>
    </div>
  );
}

export default App;