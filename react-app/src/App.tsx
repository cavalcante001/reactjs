import { useState, useEffect } from "react";
import { Category } from "./types/Category";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { api } from "./api";

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoadButton();
  }, []);

  const handleLoadButton = async () => {
    setLoading(true);
    let json = await api.getCategories();
    setCategories(json);
    setLoading(false);
  };

  const handleToken = async (email: string, password: string) => {
    const json = await api.postToken(email, password);
    console.log(json);
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}

      <PostForm onAdd={handleToken} />

      {!loading && categories.length === 0 && <div>Tente mais tarde...</div>}

      {!loading && categories.length > 0 && (
        <>
          <div>Total de categorias: {categories.length}</div>
          <br />

          <PostItem data={categories} />
        </>
      )}
    </div>
  );
};

export default App;
