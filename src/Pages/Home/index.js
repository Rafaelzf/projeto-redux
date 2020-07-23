import React, { useState, useEffect } from "react";
import api from "../../Services/api";

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);

      console.log(response.data);
    }

    loadApi();
  }, []);

  return (
    <div className="box">
      {Map.trips((element) => {
        return (
          <li key={element.id}>
            <figure>
              <img src={element.image} alt={element.title} />
            </figure>
          </li>
        );
      })}
    </div>
  );
}
