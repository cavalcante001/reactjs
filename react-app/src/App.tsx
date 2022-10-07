import { useState, useEffect, ChangeEvent } from "react";
import { Category } from "./types/Category";

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    handleLoadButton();
  }, []);

  const handleLoadButton = async () => {
    try {
      setLoading(true);
      const req = await fetch("http://localhost.com:5003/categories");
      const json = await req.json();
      setCategories(json.categories);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert("Requisição ruim");
    }
  };

  const userLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const userPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleLogin = async () => {
    if (email && pass) {
      const req = await fetch("http://localhost:5003/user/me", {
        method: "GET",
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await req.json();
      console.log(json);
    } else {
      alert("preencha os campos!");
    }
  };

  return (
    <div>
      <fieldset className="border-2 mb-3 p-3">
        <legend>Logar</legend>

        <input
          className="block border"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={userLogin}
        />
        <input
          className="block border"
          type="password"
          placeholder="Digite sua senha"
          value={pass}
          onChange={userPass}
        />
        <button className="block border" onClick={handleLogin}>
          FAZER LOGIN
        </button>
      </fieldset>

      {loading && <div>Carregando...</div>}

      {!loading && categories.length === 0 && <div>Tente mais tarde...</div>}

      {!loading && categories.length > 0 && (
        <>
          <div>Total de categorias: {categories.length}</div>
          <br />

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
    </div>
  );
};

export default App;
