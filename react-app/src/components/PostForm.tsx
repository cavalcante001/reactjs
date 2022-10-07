import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (email: string, password: string) => void;
};

export const PostForm = ({ onAdd }: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const userLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const userPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    onAdd(email, pass);
  };

  return (
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
  );
};
