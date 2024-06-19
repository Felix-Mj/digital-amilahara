import mysql from "mysql";
import util from "util";
import dotenv  from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // debug: true,
});

const getConnectionAsync = util.promisify(pool.getConnection).bind(pool);

export { getConnectionAsync };
