import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import "./style.css";
import { useSelector } from "react-redux";

export default function Header() {
  const reserveSize = useSelector((state) => state.reserve.length);
  return (
    <header className="container">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  );
}
