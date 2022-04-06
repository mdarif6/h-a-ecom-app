import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, isAuthenticated: action.payload };

    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
