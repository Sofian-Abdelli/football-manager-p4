import { useEffect, useState } from "react";

interface Team {
  id: number;
  name: string;
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error("Erreur SQL:", err));
  }, []);

  return (
    <div
      className="teams-list-container"
      style={{
        width: "100%",
        maxHeight: "400px",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <h2
        style={{ color: "#ec4899", textAlign: "center", marginBottom: "20px" }}
      >
        ÉQUIPES ENREGISTRÉES
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
        }}
      >
        {teams.map((team) => (
          <div
            key={team.id}
            style={{
              border: "1px solid #22d3ee",
              padding: "15px",
              borderRadius: "8px",
              background: "rgba(34, 211, 238, 0.1)",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{team.name}</span>
            <span style={{ float: "right", fontSize: "10px", opacity: 0.5 }}>
              ID: {team.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
