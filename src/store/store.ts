import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer
});

// Exporte os tipos para uso nos componentes
export type AppDispatch = typeof store.dispatch;