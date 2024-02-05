import { useState } from "react";

const Titulo = ({ texto }) => {
  const [texto2, setTexto2] = useState("");

  const mostrarTexto = () => {
    const valorTexto2 = "(from changed state)";
    setTexto2(valorTexto2);
  };

  return (
    <article>
      <h1>Hello {friend}</h1>
      <button onClick={() => setTexto(friend + texto)}>click me</button>
    </article>
  );
};

export default Titulo;
