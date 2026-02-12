import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Teams.css";

interface Team {
  id: number;
  name: string;
  city: string;
  logo_url?: string;
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error("Erreur API Teams:", err));

    // On laisse le tableau vide [] au lieu de [apiUrl]
  }, []);

  return (
    <div className="teams-page-container">
      <h1 className="page-title">NOS CLUBS</h1>

      <div className="teams-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <img
              src={team.logo_url || "https://via.placeholder.com/150"}
              alt={team.name}
              className="team-card-logo"
            />
            <h3>{team.name}</h3>
            <p>📍 {team.city}</p>

            <Link to={`/teams/${team.id}`} className="btn-details">
              VOIR LE CLUB
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
