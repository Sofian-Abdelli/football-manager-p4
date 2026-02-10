import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Header />

      <MainScreen>
        {/* L'Outlet injectera Home ou Teams ici */}
        <Outlet />
        <Navbar />
      </MainScreen>

      <footer className="footer-system">paris est magic</footer>
    </div>
  );
}

export default App;
