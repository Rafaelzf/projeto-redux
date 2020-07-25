import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../Services/api";
import { RiServiceLine } from "react-icons/ri";
import "./style.css";

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
    dispach({
      type: "ADD_RESERVE",
      trip,
    });
  };

  return (
    <>
      <h1>Home</h1>
      <div className="box">
        {trips.map((element) => {
          return (
            <li key={element.id}>
              <img src={element.image} alt={element.title} />

              <strong>{element.title}</strong>
              <span>{!!element.status ? "Disponível" : "Indinsponível"}</span>
              <button type="button" onClick={() => addTrip(trips)}>
                <RiServiceLine size={16} color="cornsilk" />
                <span>solicitar reserva</span>
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
