import { configureStore } from "@reduxjs/toolkit";

import { createStore } from "redux";

// import productReducers from './reduxapp/reducers/reducers';
import reducerAll from "../reducers/Index";

//const store = configureStore(productReducers);
const store = createStore(reducerAll);
export default store;
