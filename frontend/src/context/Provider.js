import { createContext, useContext, useReducer } from "react";
import { createProductActions } from "./CreateActions";
import { reducer } from "./Reducer";

export const Context = createContext();

export const ProductContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = createProductActions(dispatch);

  return (
    <Context.Provider value={[state, actions]}>{children}</Context.Provider>
  );
};

export const useProductContext = () => {
  return useContext(Context);
};
