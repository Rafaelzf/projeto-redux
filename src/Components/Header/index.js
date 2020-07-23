import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </header>
  );
}
