import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Stadium = {
  id: number;
  name: string;
  capacity: number | null;
  city: string;
  established_year: number | null;
  address: string | null;
};

class StadiumRepository {
  async create(stadium: Omit<Stadium, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO stadium (name, capacity, city, established_year, address) VALUES (?, ?, ?, ?, ?)",
      [
        stadium.name,
        stadium.capacity ?? null,
        stadium.city,
        stadium.established_year ?? null,
        stadium.address ?? null,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM stadium");
    return rows as Stadium[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM stadium WHERE id = ?",
      [id],
    );
    return rows[0] as Stadium;
  }

  async update(stadium: Stadium) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE stadium SET name = ?, capacity = ?, city = ?, established_year = ?, address = ? WHERE id = ?",
      [
        stadium.name,
        stadium.capacity ?? null,
        stadium.city,
        stadium.established_year ?? null,
        stadium.address ?? null,
        stadium.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM stadium WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new StadiumRepository();
