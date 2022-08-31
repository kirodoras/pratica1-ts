import { connection } from "../database.js";

export async function select(){
    const result = await connection.query(`SELECT username, wins, losses, draws FROM fighters ORDER BY wins DESC`);
    return result.rows;
}