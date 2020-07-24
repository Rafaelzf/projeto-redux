import React from "react";
import "./style.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Reservas() {
  return (
    <>
      <div>
        <h1 className="title">Reservas</h1>
        <h4>Você solicitou 0 reservas</h4>
        <div className="reservas">
          <img
            src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
            alt="Maceio"
          />
          <strong>Viagem Maceió 7 dias</strong>
          <span>Quantidade: 2</span>
          <button type="button" onClick={() => {}}>
            <FaTrashAlt size={16} color="cornsilk" />
          </button>
        </div>
      </div>
      <footer>
        <button type="button" onClick={() => {}}>
          <span>solicitar reserva</span>
        </button>
      </footer>
    </>
  );
}
