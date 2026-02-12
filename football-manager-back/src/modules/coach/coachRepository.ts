import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Coach = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  nationality: string;
  specialty: string;
  team_id: number;
};

class CoachRepository {
  async create(coach: Omit<Coach, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO coach (firstname, lastname, age, nationality, specialty, team_id) VALUES (?, ?, ?, ?, ?, ?)",
      [
        coach.firstname,
        coach.lastname,
        coach.age,
        coach.nationality,
        coach.specialty,
        coach.team_id,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM coach");
    return rows as Coach[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM coach WHERE id = ?",
      [id],
    );
    return rows[0] as Coach;
  }

  async update(coach: Coach) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE coach SET firstname = ?, lastname = ?, age = ?, nationality = ?, specialty = ?, team_id = ? WHERE id = ?",
      [
        coach.firstname,
        coach.lastname,
        coach.age,
        coach.nationality,
        coach.specialty,
        coach.team_id,
        coach.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM coach WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new CoachRepository();
