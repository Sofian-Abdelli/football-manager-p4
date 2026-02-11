import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Stadium {
  id: number;
  name: string;
  city: string;
  capacity: number;
}

function Stadiums() {
  const [stadiums, setStadiums] = useState<Stadium[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3310/api/stadiums")
      .then((res) => res.json())
      .then((data) => setStadiums(data))
      .catch((err) => console.error("Erreur fetch stades:", err));
  }, []);

  return (
    <div className="stadium-page">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="back-button"
      >
        ⬅ Retour au Menu
      </button>
      <h2>STADES ENREGISTRÉS</h2>
      <div className="stadium-list">
        {stadiums.map((s) => (
          <div key={s.id} className="stadium-card">
            <h3>{s.name}</h3>
            <p>
              {s.city} - {s.capacity} places
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stadiums;
