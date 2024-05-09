import { useState } from "react";
import Card from "./components/Card";
import { cuadros } from "./datos";
import styled from "styled-components";
import { useEffect } from "react";
import "../src/App.css";
import Panel from "./components/Panel";
import InfoJuego from "./components/InfoJuego";

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px;
  justify-content: center;
`;

const cuadrosJuntos = [...cuadros, ...cuadros];

const cuadrosPrevios = cuadrosJuntos.map((valor) => ({
  imagen: valor,
  estado: 0,
}));

function App() {
  const [misCuadros, setMisCuadros] = useState([]);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
  const [aciertos, setAciertos] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    for (let i = cuadrosPrevios.length - 1; i > 0; i--) {
      let aleatorio = Math.floor(Math.random() * (i + 1));
      [cuadrosPrevios[i], cuadrosPrevios[aleatorio]] = [
        cuadrosPrevios[aleatorio],
        cuadrosPrevios[i],
      ];
    }
    setMisCuadros(cuadrosPrevios);
  }, []);

  const marcar = (e) => {
    const existe = cartasSeleccionadas.find((elem) => elem.indice === e);
    const yaEncontrada = misCuadros[e].estado;
    if (yaEncontrada === 1) return;
    if (existe) return;
    if (cartasSeleccionadas.length === 2) return;
    setCartasSeleccionadas([
      ...cartasSeleccionadas,
      {
        imagen: misCuadros[e].imagen,
        indice: e,
      },
    ]);
    const prevItem = [...misCuadros];
    prevItem[e].estado = 1;
    setMisCuadros(prevItem);
  };

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      setIntentos(intentos + 1);
      if (cartasSeleccionadas[0].imagen === cartasSeleccionadas[1].imagen) {
        setCartasSeleccionadas([]);
        setAciertos(aciertos + 1);
        if (aciertos + 1 === cuadros.length) {
          setMensaje(`Felicidades, has ganado en ${intentos + 1} intentos`);
          setFinalizado(true);
        }
      } else {
        setTimeout(() => {
          cartasSeleccionadas.map((objeto) => {
            const prevItem = [...misCuadros];
            prevItem[objeto.indice].estado = 0;
            setMisCuadros(prevItem);
            setCartasSeleccionadas([]);
          });
        }, 1000);
      }
    }
  }, [cartasSeleccionadas]);

  return (
    <>
      <Contenedor>
        {misCuadros.map((cuadro, index) => (
          <Card key={index} marcar={marcar} index={index} cuadro={cuadro} />
        ))}
      </Contenedor>
      <InfoJuego aciertos={aciertos} intentos={intentos} />

      {finalizado && <Panel mensaje={mensaje} />}
    </>
  );
}

export default App;
