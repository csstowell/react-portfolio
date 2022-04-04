import { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

// reducer to change from false to true
const themeReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        return { darkMode: !state.darkMode };
      default:
        return state;
    }
  };

// use reducer hook
  export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  
    return (
      <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    );
  };