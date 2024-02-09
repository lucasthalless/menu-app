import { FormEvent, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    data.password === "" || data.username === ""
      ? setFormError(true)
      : setFormError(false);

    if (formError) return;

    try {
      axios.post("http://localhost:3000/auth/login", data).then((response) => {
        document.cookie = `auth_token=${response.data.access_token}`;
        setTimeout(() => navigate("/products"), 1000);
      });
    } catch (error) {
      setFormError(true);
      throw new Error();
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Usuário"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        {formError ? <span>Usuário ou senha inválidos.</span> : null}
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
