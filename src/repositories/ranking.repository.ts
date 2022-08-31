import { connection } from "../database.js";

export async function select(){
    const result = await connection.query(`SELECT * FROM fighters`);
    return result.rows;
}