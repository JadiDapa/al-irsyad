import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const setLog = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, setLog }}>
      {children}
    </LoginContext.Provider>
  );
};
