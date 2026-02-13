import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Teams.css";
import logoLyon from "../assets/images/logo_lyon.svg.svg";

interface Team {
  id: number;
  name: string;
  city: string;
  country: string;
  established: number;
  trophys: number;
  user_id: number;
  stadium_id: number;
  logo_url?: string;
}

interface Stadium {
  id: number;
  name: string;
  capacity: number;
}

// On sort la variable ici : Biome ne pourra plus râler sur les dépendances
const apiUrl = import.meta.env.VITE_API_URL;

export default function TeamDetail() {
  const [team, setTeam] = useState<Team | null>(null);
  const [stadium, setStadium] = useState<Stadium | null>(null);
  const { id } = useParams();

  useEffect(() => {
    // On lance les deux en même temps
    Promise.all([
      fetch(`${apiUrl}/api/teams/${id}`).then((res) => res.json()),
      fetch(`${apiUrl}/api/stadiums/${id}`).then((res) => res.json()),
    ])
      .then(([teamData, stadiumData]) => {
        // On met à jour les deux états d'un coup
        setTeam(teamData);
        setStadium(stadiumData);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des données :", err);
      });
  }, [id]);

  if (!team || !stadium) {
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
          src={team.logo_url || logoLyon}
          alt={team.name}
          className="team-card-logo"
        />
        <h1 className="page-title">{team.name}</h1>
        <p>📍 Ville : {team.city}</p>
        <p>country: {team.country}</p>
        <p>established: {team.established}</p>
        <p>trophys: {team.trophys}</p>
        <p>country: {team.country}</p>
        <p>stadium: {stadium.name}</p>
        <p>capacity: {stadium.capacity}</p>
        {/*<p>user: {team.user_id}</p>*/}
      </div>
    </div>
  );
}
