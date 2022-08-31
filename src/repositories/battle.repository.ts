import { connection } from "../database.js";

export async function insert(
  username: string,
  wins: number,
  losses: number,
  draws: number
) {
  await connection.query(
    `INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)`,
    [username, wins, losses, draws]
  );
}