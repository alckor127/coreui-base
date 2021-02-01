import React from "react";
import { AuthContext } from "contexts/Auth";
import { useStorage } from "hooks";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
