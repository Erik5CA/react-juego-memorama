/* eslint-disable react/prop-types */

import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.411);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Texto = styled.div`
  padding: 40px;
  border-radius: 25px;
  background-color: white;
  width: 500px;
  height: 200px;
  font-size: 1.8em;
  color: black;
`;

const Button = styled.button`
  font-size: 1.3rem;
  padding: 8px 20px;
  cursor: pointer;
  background-color: #459eec;
  border-radius: 5px;
  border: none;
`;

function Panel({ mensaje }) {
  return (
    <Modal>
      <Texto>
        <div>{mensaje}</div>
        <Button onClick={() => window.location.reload(false)}>
          Volver a Jugar
        </Button>
      </Texto>
    </Modal>
  );
}

export default Panel;
