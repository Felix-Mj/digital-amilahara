import { getConnectionAsync } from "../config/db.js";
import util from "util";
import bcript from 'bcrypt'

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const Password = await bcript.hash(password, 10)
    if (!name) return res.status(400).json({ error: "Name is required." });
    const con = await getConnectionAsync();
    const createTeamQuery =
      "INSERT INTO user(name,email,password) VALUES (?,?,?)";
    const insertTeam = await util.promisify(con.query).bind(con)(createTeamQuery,[name, email, Password]);
    if (!insertTeam) {
      con.release();
      return res.status(401).json({ error: "Signup faild" });
    }
    con.release();
    return res.status(200).json("Signup successfully",);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};




export { signup };
