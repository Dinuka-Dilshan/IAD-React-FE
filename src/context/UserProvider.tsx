import { createContext, ReactNode, useContext, useState } from "react";

const UserContext = createContext({});

export const useUser = () => useContext<any>(UserContext);

interface Props {
  children: ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({});


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
