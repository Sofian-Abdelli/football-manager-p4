import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Poste = {
  id: number;
  label: string;
  abbr: string;
};

class PosteRepository {
  async create(poste: Omit<Poste, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO poste (label, abbr) VALUES (?, ?)",
      [poste.label, poste.abbr],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM poste");
    return rows as Poste[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM poste WHERE id = ?",
      [id],
    );
    return rows[0] as Poste;
  }

  async update(poste: Poste) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE poste SET label = ?, abbr = ? WHERE id = ?",
      [poste.label, poste.abbr, poste.id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM poste WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new PosteRepository();
