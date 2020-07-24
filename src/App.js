import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import Header from "./Components/Header";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
