import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* Link remplace <a> ou <button> pour ne pas recharger la page */}
      <Link to="/teams" className="nav-button">
        Teams
      </Link>
      <Link to="/stadiums" className="nav-button">
        Stadiums
      </Link>
      <Link to="/players" className="nav-button">
        Players
      </Link>
      <Link to="/create" className="nav-button">
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
