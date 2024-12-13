import "./styles.css";
import AppRoutes from "./routes";
import Header from "./components/Project/Header";
import { TicketsContext } from "./context/TicketsContext";

export default function App() {
  return (
    <div className="App">
      <TicketsContext.Provider>
        <Header>
          <AppRoutes />
        </Header>
      </TicketsContext.Provider>
    </div>
  );
}
