import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
