import { createStore } from "redux";
import reducer from "./modules/reservas/reducer";

const store = createStore(reducer);

export default store;
