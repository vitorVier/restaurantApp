import { combineReducers } from "redux";
import cartReducer from "./slices/slice";

const rootReducer = combineReducers({
  cart: cartReducer
});

// Exporte o tipo do estado raiz
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;