import { createContext, useReducer } from "react";
import { createActions } from "./CreateActions";
import { reducer } from "./Reducer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    foundProducts: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return (
    <Context.Provider value={[state, actions]}>{children}</Context.Provider>
  );
};
