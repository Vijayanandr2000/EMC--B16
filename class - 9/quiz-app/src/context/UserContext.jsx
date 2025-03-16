import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        score,
        setScore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
