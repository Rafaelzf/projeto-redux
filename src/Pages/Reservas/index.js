import React from "react";
import "./style.css";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Reservas() {
  const reserve = useSelector((state) => state.reserve);

  return (
    <>
      <div>
        <h1 className="title">Reservas</h1>
        <h4>Você solicitou {reserve.length} reservas</h4>

        {reserve.map((element) => {
          console.log(element.title);
          return (
            <div className="reservas" key={element.id}>
              <img src={element.image} alt={element.title} />
              <strong>{element.title}</strong>
              <span>Quantidade: {element.amount}</span>
              <button type="button" onClick={() => {}}>
                <FaTrashAlt size={16} color="cornsilk" />
              </button>
            </div>
          );
        })}
      </div>
      <footer>
        <button type="button" onClick={() => {}}>
          <span>solicitar reserva</span>
        </button>
      </footer>
    </>
  );
}
