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
};

class TeamRepository {
  // The C of CRUD - Create operation

  async create(team: Omit<Team, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
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

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT team.*, stadium.name AS stadium_name 
     FROM team 
     LEFT JOIN stadium ON team.stadium_id = stadium.id 
     WHERE team.id = ?`,
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Team;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT team.*, stadium.name AS stadium_name 
     FROM team 
     LEFT JOIN stadium ON team.stadium_id = stadium.id`, // On enlève la jointure pour l'instant
    );
    console.log("Données reçues de MySQL :", rows);

    // Return the array of items
    return rows as Team[];
  }

  // The U of CRUD - Update operation
  async update(team: Team) {
    // On met à jour toutes les colonnes pour l'ID spécifié
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
        team.id, // L'ID sert à cibler la bonne ligne dans le WHERE
      ],
    );

    return result.affectedRows; // Retourne 1 si l'équipe a été modifiée, 0 sinon
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // On supprime la ligne qui correspond à l'ID
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM team WHERE id = ?",
      [id],
    );

    return result.affectedRows; // Retourne 1 si l'équipe a été supprimée
  }
}

export default new TeamRepository();
