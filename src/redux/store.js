import { createStore } from "redux";//createStore function is depreciated that's why cross line coming
import rootReducer from "./rootReducer";


const store=createStore(rootReducer);

export default store;
