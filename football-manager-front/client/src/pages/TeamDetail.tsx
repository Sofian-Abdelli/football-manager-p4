import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Teams.css";

interface Team {
  id: number;
  name: string;
  city: string;
  logo_url?: string;
}

// On sort la variable ici : Biome ne pourra plus râler sur les dépendances
const apiUrl = import.meta.env.VITE_API_URL;

export default function TeamDetail() {
  const [team, setTeam] = useState<Team | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/api/teams/${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Erreur API Team Detail:", err));

    // On met uniquement [id] car c'est la seule variable interne qui change
  }, [id]);

  if (!team) {
    return (
      <div className="teams-page-container">
        <p>Chargement du club...</p>
      </div>
    );
  }

  return (
    <div className="teams-page-container">
      <Link
        to="/teams"
        className="btn-details"
        style={{ marginBottom: "20px", display: "inline-block" }}
      >
        ← RETOUR AUX CLUBS
      </Link>

      <div
        className="team-card"
        style={{ margin: "0 auto", maxWidth: "400px" }}
      >
        <img
          src={team.logo_url || "https://via.placeholder.com/150"}
          alt={team.name}
          className="team-card-logo"
        />
        <h1 className="page-title">{team.name}</h1>
        <p>📍 Ville : {team.city}</p>
      </div>
    </div>
  );
}
