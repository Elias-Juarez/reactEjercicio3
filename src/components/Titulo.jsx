import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ texto }) => {
  const [texto2, setTexto2] = useState("");

  const mostrarTexto = () => {
    const valorTexto2 = "(from changed state)";
    setTexto2(valorTexto2);
  };

  return (
    <article>
      <h1>Hello {texto} {texto2}</h1>
      <Button onClick={mostrarTexto}>click me</Button>
    </article>
  );
};

export default Titulo;
