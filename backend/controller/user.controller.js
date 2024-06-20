import bcript from "bcrypt";
import { User } from "../Models/user.models.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;    
    if (!name) {
      return res.status(400).json({ success: false, message: "Required Name" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Required Email" });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: "Required Password" });
    }
    const hash = await bcript.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    res.status(201).json({ success: true, message: "User created successfully", user: user });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server problem",error });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
};

export { signup, login };
