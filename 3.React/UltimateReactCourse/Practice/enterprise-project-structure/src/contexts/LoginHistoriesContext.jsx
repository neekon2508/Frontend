import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const LoginHistoriesContext = createContext();

function LoginHistoriesProvider({ children }) {
  const [loginHistories, setLoginHistories] = useState([]);

  useEffect(function () {
    async function fetchLoginHistories() {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      setLoginHistories(data);
    }
    fetchLoginHistories();
  }, []);

  return (
    <LoginHistoriesContext.Provider value={{ loginHistories }}>
      {children}
    </LoginHistoriesContext.Provider>
  );
}

function useLoginHistories() {
  const context = useContext(LoginHistoriesContext);
  if (context === undefined) throw new Error("Error when creating context");
  return context;
}
export { LoginHistoriesProvider, useLoginHistories };
