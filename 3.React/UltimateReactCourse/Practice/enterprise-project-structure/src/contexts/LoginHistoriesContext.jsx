import { useContext } from "react";
import { createContext } from "react";

const LoginHistoriesContext = createContext();

function LoginHistoriesProvider({ children }) {
  return (
    <LoginHistoriesContext.Provider value={{}}>
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
