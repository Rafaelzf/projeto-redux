import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../Services/api";
import { RiServiceLine } from "react-icons/ri";
import "./style.css";
import { addReserve } from "../../Store/modules/reservas/actions";
export default function Home() {
  const dispach = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
    }

    loadApi();
  }, []);

  const addTrip = (trip) => {
    dispach(addReserve(trip));
  };

  return (
    <>
      <div className="containerChoose">
        <h1>Home</h1>
        <ul className="box">
          {trips.map((element) => {
            return (
              <li key={element.id}>
                <img src={element.image} alt={element.title} />
                <p>
                  <strong>{element.title}</strong>
                  <span>
                    {!!element.status ? "Disponível" : "Indinsponível"}
                  </span>
                </p>

                <button type="button" onClick={() => addTrip(element)}>
                  <RiServiceLine size={16} color="cornsilk" />
                  <span>solicitar reserva</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
