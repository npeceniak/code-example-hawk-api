import { createStore } from "redux";
import detailsReducer from "./detailsReducers";

const store = createStore(detailsReducer);

export default store;
