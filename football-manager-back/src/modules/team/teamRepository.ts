import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Team = {
  id: number;
  name: string;
  established: number;
  country: string;
  city: string;
  stadium: string;
  trophys: number;
  user_id: number;
};

class TeamRepository {
  // The C of CRUD - Create operation

  async create(team: Omit<Team, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into team (name, established, country, city, stadium, trophys, user_id) values (?, ?, ?, ?, ?, ?, ?)",
      [
        team.name,
        team.established,
        team.country,
        team.city,
        team.stadium,
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
      "select * from team where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Team;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, name, established, country, city, stadium, trophys, user_id FROM team",
    );

    // Return the array of items
    return rows as Team[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new TeamRepository();
