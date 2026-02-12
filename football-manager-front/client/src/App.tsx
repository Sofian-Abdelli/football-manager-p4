import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  // Cet outil permet à React de savoir sur quelle page on se trouve
  const location = useLocation();

  return (
    <div className="app-layout">
      {location.pathname !== "/" && (
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/teams"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Teams
          </NavLink>

          <NavLink
            to="/players"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Players
          </NavLink>

          <NavLink
            to="/stadiums"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stadiums
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Création
          </NavLink>
        </nav>
      )}

      <main className="container">
        {/* C'est ici que tes pages (Home, Create, etc.) s'affichent */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
