import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = "vijay";
  const age = 23;
  return (
    <UserContext.Provider value={{ user, age }}>
      {children}
    </UserContext.Provider>
  );
};
