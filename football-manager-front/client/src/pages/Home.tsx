import { NavLink } from "react-router-dom";
import "./HomePage.css";

export default function Home() {
  return (
    <div className="home-screen">
      <div className="home-header">
        <h1>FOOTBALL MANAGER</h1>
        <p className="subtitle">CREATE YOUR TEAM</p>
      </div>

      <div className="main-menu-container">
        <h2 className="menu-title">— MENU PRINCIPAL —</h2>
        <nav className="home-navigation">
          <NavLink to="/teams" className="nav-button">
            TEAMS
          </NavLink>
          <NavLink to="/stadiums" className="nav-button">
            STADIUMS
          </NavLink>
          <NavLink to="/players" className="nav-button">
            PLAYERS
          </NavLink>
          <NavLink to="/create" className="nav-button accent">
            CRÉATION
          </NavLink>
        </nav>
      </div>

      <div className="home-footer">PARIS EST MAGIC</div>
    </div>
  );
}
