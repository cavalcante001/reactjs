import { useState } from "react";

const App = () => {
  const [categories, setCategories] = useState([]);

  const handleLoadButton = () => {
    fetch('http://localhost.com:5003/categories')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCategories(json.categories);
      })

  }
    
  return (
    <div>
      <button className="block bg-blue-400 p-2 rounded" onClick={handleLoadButton}>Carregar categorias</button>
      Total de categorias: {categories.length}

    </div>
  );
}

export default App;