import { useState, useEffect } from "react";
import { Category } from './types/Category'

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    handleLoadButton();
  }, []);

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

      <div className="grid grid-cols-5">
        {categories.map((item) => (
          <div>
            <p>{item.name}</p>
            <img src={item.img} className="w-10" />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;