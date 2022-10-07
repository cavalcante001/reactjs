import { useState, useEffect } from "react";
import { Category } from "./types/Category";

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoadButton();
  }, []);

  const handleLoadButton = () => {
    fetch("http://localhost.com:5003/categories")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCategories(json.categories);
      })
      .catch((e) => {
        setLoading(false);
        setCategories([]);
        console.log(e);
      });
  };

  // const handleLoadButton = async () => {
  //   try {
  //     setLoading(true);
  //     const req = await fetch("http://localhost.com:5003/categories");
  //     const json = await req.json();
  //     setCategories(json.categories);
  //     setLoading(false);
  //   } catch (e) {
  //     setLoading(false);
  //     alert("Requisição ruim");
  //   }
  // };

  return (
    <div>
      {!loading && categories.length > 0 && (
        <>
          <button
            className="block bg-blue-400 p-2 rounded"
            onClick={handleLoadButton}
          >
            Carregar categorias
          </button>
          <div>Total de categorias: {categories.length}</div>

          <div className="grid grid-cols-5">
            {categories.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <img src={item.img} className="w-10" />
              </div>
            ))}
          </div>
        </>
      )}
      {loading && <div>Carregando...</div>}

      {!loading && categories.length === 0 && <div>Tente mais tarde...</div>}
    </div>
  );
};

export default App;
