import { AbstractSeeder } from "./AbstractSeeder";
import UserSeeder from "./UserSeeder"; // Import indispensable pour la dépendance

class TeamSeeder extends AbstractSeeder {
  constructor() {
    // On définit la table cible
    super({ table: "team", truncate: true, dependencies: [UserSeeder] });
  }

  async run() {
    // On récupère l'utilisateur créé grâce à son refName
    const adminUser = this.getRef("admin-user");
    const teams = [
      {
        name: "Real Madrid",
        city: "Madrid",
        country: "Espagne",
        established: 1902,
        trophys: 100,
        stadium: "Santiago Bernabéu",
        user_id: adminUser.insertId,
      },
      {
        name: "Liverpool FC",
        city: "Liverpool",
        country: "Angleterre",
        established: 1892,
        trophys: 68,
        stadium: "Anfield",
        user_id: adminUser.insertId,
      },
      {
        name: "Bayern Munich",
        city: "Munich",
        country: "Allemagne",
        established: 1900,
        trophys: 83,
        stadium: "Allianz Arena",
        user_id: adminUser.insertId,
      },
      {
        name: "PSG",
        city: "Paris",
        country: "France",
        established: 1970,
        trophys: 48,
        stadium: "Parc des Princes",
        user_id: adminUser.insertId,
      },
      {
        name: "Olympique de Marseille",
        city: "Marseille",
        country: "France",
        established: 1899,
        trophys: 28,
        stadium: "Orange Vélodrome",
        user_id: adminUser.insertId,
      },
      {
        name: "Manchester City",
        city: "Manchester",
        country: "Angleterre",
        established: 1880,
        trophys: 34,
        stadium: "Etihad Stadium",
        user_id: adminUser.insertId,
      },
      {
        name: "Manchester United",
        city: "Manchester",
        country: "Angleterre",
        established: 1878,
        trophys: 67,
        stadium: "Old Trafford",
        user_id: adminUser.insertId,
      },
      {
        name: "Fc Barcelone",
        city: "Barcelone",
        country: "Espagne",
        established: 1899,
        trophys: 77,
        stadium: "Spotify Camp Nou",
        user_id: adminUser.insertId,
      },
    ];

    for (const team of teams) {
      // Cette méthode utilise l'AbstractSeeder pour envoyer les données au client DB
      this.insert(team);
    }
  }
}

export default TeamSeeder;
