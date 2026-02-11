import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Player = {
  id: number;
  firstname: string;
  lastname: string;
  number: number;
  team_id: number;
  poste_id: number;
};

class PlayerRepository {
  async create(player: Omit<Player, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO player (firstname, lastname, number, team_id, poste_id) VALUES (?, ?, ?, ?, ?)",
      [
        player.firstname,
        player.lastname,
        player.number,
        player.team_id,
        player.poste_id,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM player");
    return rows as Player[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM player WHERE id = ?",
      [id],
    );
    return rows[0] as Player;
  }

  async update(player: Player) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE player SET firstname = ?, lastname = ?, number = ?, team_id = ?, poste_id = ? WHERE id = ?",
      [
        player.firstname,
        player.lastname,
        player.number,
        player.team_id,
        player.poste_id,
        player.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM player WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new PlayerRepository();
