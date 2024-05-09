/* eslint-disable react/prop-types */
import styled from "styled-components";
import { tapaImagen } from "../datos";

const CardMem = styled.div`
  width: 150px;
  height: 150px;
  background-color: orange;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background-image: url(${(prop) =>
    prop.mostrar === 0 ? tapaImagen : prop.imagen});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 85%;
`;

function Card({ marcar, index, cuadro }) {
  return (
    <CardMem
      onClick={() => marcar(index)}
      mostrar={cuadro?.estado}
      imagen={cuadro.imagen}
    ></CardMem>
  );
}

export default Card;
