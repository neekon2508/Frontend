import { LoginHistoriesProvider } from "./contexts/LoginHistoriesContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";

function App() {
  return (
    <BrowserRouter>
      <LoginHistoriesProvider>
        <Router />
      </LoginHistoriesProvider>
    </BrowserRouter>
  );
}

export default App;
