// On utilise 'import type' pour RowDataPacket car il n'est utilisé que comme type
import type { RowDataPacket } from "mysql2";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Team = {
  id: number;
  name: string;
  established: number;
  country: string;
  city: string;
  stadium_id: number;
  stadium_name?: string;
  trophys: number;
  user_id: number;
  logo_url?: string; // Ajoute-le ici si tu veux éviter des erreurs TypeScript
};

class TeamRepository {
  // CREATE
  async create(team: Omit<Team, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into team (name, established, country, city, stadium_id, trophys, user_id) values (?, ?, ?, ?, ?, ?, ?)",
      [
        team.name,
        team.established,
        team.country,
        team.city,
        team.stadium_id,
        team.trophys,
        team.user_id,
      ],
    );
    return result.insertId;
  }

  // READ (Détail avec Coach et Stade)
  async read(id: number) {
    const [rows] = await databaseClient.query<RowDataPacket[]>(
      `SELECT 
        team.*, 
        stadium.name AS stadium_name,
        stadium.capacity AS stadium_capacity,
        coach.firstname AS coach_firstname,
        coach.lastname AS coach_lastname,
        (SELECT COUNT(*) FROM player WHERE player.team_id = team.id) AS player_count
      FROM team 
      LEFT JOIN stadium ON team.stadium_id = stadium.id 
      LEFT JOIN coach ON team.id = coach.team_id 
      WHERE team.id = ?`,
      [id],
    );
    return rows[0];
  }

  // READ ALL (Liste complète)
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT team.*, stadium.name AS stadium_name 
      FROM team 
      LEFT JOIN stadium ON team.stadium_id = stadium.id`,
    );
    return rows as Team[];
  }

  // UPDATE
  async update(team: Team) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE team SET name = ?, city = ?, country = ?, established = ?, trophys = ?, stadium_id = ?, user_id = ? WHERE id = ?",
      [
        team.name,
        team.city,
        team.country,
        team.established,
        team.trophys,
        team.stadium_id,
        team.user_id,
        team.id,
      ],
    );
    return result.affectedRows;
  }

  // DELETE
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM team WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new TeamRepository();
