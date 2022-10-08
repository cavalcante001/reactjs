import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

const App = () => {
  const [list, dispath] = usePeopleList();
  const [nameInput, setNameInput] = useState("");

  const handleAddButton = () => {
    if (nameInput) {
      dispath({
        type: "ADD",
        payload: {
          name: nameInput,
        },
      });
      setNameInput("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  return (
    <div className="p-5">
      <input
        className="border-2"
        type="text"
        value={nameInput}
        onChange={handleInputChange}
      />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />
      <button onClick={() => dispath({ type: "ORDER" })}>Ordenar</button> <br />
      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              onClick={() => dispath({ type: "DEL", payload: { id: item.id } })}
            >
              [ deletar ]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
