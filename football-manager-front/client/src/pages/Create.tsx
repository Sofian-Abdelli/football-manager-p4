import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import "./Forms.css";

interface Poste {
  id: number;
  label: string;
}
interface Team {
  id: number;
  name: string;
}

export default function Create() {
  const [tab, setTab] = useState("player");
  const [postes, setPostes] = useState<Poste[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isAffiliated, setIsAffiliated] = useState(false);
  const [formData, setFormData] = useState<
    Record<string, string | number | boolean>
  >({});

  // 1. On centralise l'URL de l'API
  const apiUrl = import.meta.env.VITE_API_URL;

  // 2. useEffect : Chargement des données au montage
  useEffect(() => {
    // Charger les équipes
    fetch(`${apiUrl}/api/teams`)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error("Erreur teams:", err));

    // Charger les postes
    fetch(`${apiUrl}/api/postes`)
      .then((res) => res.json())
      .then((data) => setPostes(data))
      .catch((err) => console.error("Erreur postes:", err));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const endpoint = tab === "player" ? "players" : "teams";

    try {
      const response = await fetch(`${apiUrl}/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Transfert validé ! Données enregistrées en BDD.");
        setFormData({});
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Erreur lors de l'enregistrement.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="create-page">
      <h2>CENTRE DE CRÉATION</h2>

      <div className="tabs-container">
        <button
          type="button" // Ajouté pour Biome
          className={tab === "player" ? "tab active" : "tab"}
          onClick={() => setTab("player")}
        >
          Joueur
        </button>
        <button
          type="button" // Ajouté pour Biome
          className={tab === "team" ? "tab active" : "tab"}
          onClick={() => setTab("team")}
        >
          Équipe
        </button>
      </div>

      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          {tab === "player" ? (
            <>
              <h3>Nouveau Joueur</h3>
              <div className="form-row">
                <input
                  name="firstname"
                  placeholder="Prénom"
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastname"
                  placeholder="Nom"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <select name="poste_id" onChange={handleChange} required>
                  <option value="">-- Choisir un Poste --</option>
                  {postes.map(
                    (
                      p, // Typage automatique via le state
                    ) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ),
                  )}
                </select>
                <input
                  name="number"
                  type="number"
                  placeholder="N° Maillot"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="affiliation-section">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    onChange={(e) => setIsAffiliated(e.target.checked)}
                  />
                  Affilier à une équipe existante ?
                </label>

                {isAffiliated ? (
                  <select name="team_id" onChange={handleChange} required>
                    <option value="">Choisir parmi vos équipes</option>
                    {teams.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name="fictional_team"
                    placeholder="Nom de l'équipe fictive"
                    onChange={handleChange}
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <h3>Fonder un Club</h3>
              <input
                name="name"
                placeholder="Nom du club"
                onChange={handleChange}
                required
              />
              <input name="city" placeholder="Ville" onChange={handleChange} />
            </>
          )}
          <button type="submit" className="btn-submit">
            VALIDER EN BDD
          </button>
        </form>
      </div>
    </div>
  );
}
