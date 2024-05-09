/* eslint-disable react/prop-types */
import styled from "styled-components";

const Juego = styled.div`
  background-color: #5c5b5b;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  border-radius: 5px;
  & p {
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

function InfoJuego({ aciertos, intentos }) {
  return (
    <Juego>
      <p>
        Aciertos: <strong>{aciertos}</strong>
      </p>
      <p>
        Intentos: <strong>{intentos}</strong>
      </p>
      {intentos > 0 && (
        <p>
          Procentaje de acierto:
          <strong> {Math.round((aciertos * 100) / intentos)}%</strong>
        </p>
      )}
    </Juego>
  );
}

export default InfoJuego;
